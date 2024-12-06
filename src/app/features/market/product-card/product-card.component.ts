import { Component, inject, Input, Output } from '@angular/core';
import { GeneralinpuOneComponent } from '../../components/generalinpu-one/generalinpu-one.component';
import { GeneralAddToCartbuttonComponent } from "../components/generaladdtocartbutton/generaladdtocartbutton.component";
import { GeneralbuybuttonComponent } from "../components/generalbuybutton/generalbuybutton.component";
import { RatingsComponent } from "../components/ratings/ratings.component";
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { UserCrudService } from '../../../services/user/user-crud.service';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../../utils/cart.interface';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, GeneralinpuOneComponent, GeneralAddToCartbuttonComponent, GeneralbuybuttonComponent, RatingsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product : any;

  cartService = inject(CartCrudService)
  toaster = inject(ToastrService)
  userService = inject(UserCrudService)
  authService = inject(AuthService)
  router = inject(Router)

  itemsLoading = false;
  loadingBid = false;
  loadingCart = false;
  successfull = false;
  bidError = "";

  bid = 0;
  quantity = 1;

  supports : Array<any> = [
    "delivery"
  ]

  addToCartButtonStyle = {
   
    'height' : '2rem',
    'width' : '100%',
    'border' : '0',
    'padding' : '0 10px',
    'outline' : '0',
    'font-size' : '14px',
    'font-weight' : '500',
    'gap' : '5px',
    'color' : '#fff',
    'cursor' : 'pointer',
    'background-color': '#F5B000'
  }

  
  
  addBuyButtonStyle = {
    'height' : '2rem',
    'width' : '4.5rem',
    'border' : '0',
    'padding' : '0 10px',
    'outline' : '0',
    'font-size' : '14px',
    'font-weight' : '500',
    'color' : '#fff',
    'cursor' : 'pointer',
    'background-color': 'var(--primaryAccentColor)'
  }

  addToCart(itemId : string){
    this.loadingCart = true;
    const uid = sessionStorage.getItem("uid");
    if(uid != null)
      this.userService.getUser({Id: uid}).subscribe({
    next: (n : any) => {
      var payload :  CartItem = {
        itemId: itemId,
        cartId: n.cartId,
        quantity: this.quantity
      }
      
      this.cartService.addToCart(payload).subscribe({
        next: (n : any) => {
          this.loadingCart = false;
          this.toaster.success("Added to cart successfully!")
        }, 
        error: (e)=> {
          this.loadingCart = false;
          this.toaster.show("error", e.message)
        }
       })
     }
  })

  else {
    this.loadingCart = false;
    this.authService.loginDialog();
  }
  }

  placeBid(itemId: string) {
    // Start loading state
    
    this.loadingBid = true;
    // Get user ID from session storage
    const uid = sessionStorage.getItem("uid");
    
    this.bidError = "";
    
    // Validate bid before submission
    if (this.bid <= this.product.price) {
      this.toaster.error( "Amount should be greater than 0 or the starting bid!")
      this.loadingBid = false;
      return ;
    }
    
    if (uid && this.bid > this.product.price) {
      // Retrieve user details
      this.userService.getUser({ Id: uid }).subscribe({
        next: (user: any) => {
          // Prepare bid payload
          
          const payload = {
            itemId: itemId,
            buyerId: user.id,
            bid: this.bid
          };
  
          // Submit bid
          this.cartService.bidProduct(payload).subscribe({
            next: (response: any) => {
              // Successful bid
              this.loadingBid = false;
              this.successfull = true;
              this.toaster.show("success", "Bid placed successfully!");
            },
            error: (error) => {
              // Bid failed
              this.loadingBid = false;
              this.toaster.show("error", error.message || "Failed to place bid");
            }
          });
        },
        error: (userError) => {
          // User retrieval failed
          this.loadingBid = false;
          this.toaster.show("error", "Unable to retrieve user information");
        }
      });
    } else {
      // No user ID found
      this.loadingBid = false;
      this.toaster.show("error", "Please log in to place a bid");
    }
  }

  buy(item : string){
    const uid = sessionStorage.getItem("uid");
     if(uid != null){
      this.router.navigate(['/payment'], {
        queryParams: {
          id : item
        }
      })
    } else {
      this.authService.loginDialog()
    }
  }

}
