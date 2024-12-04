import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { SubTotalComponent } from "../components/sub-total/sub-total.component";
import { GeneralbuttonComponent } from "../../components/generalbutton/generalbutton.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { UserCrudService } from '../../../services/user/user-crud.service';
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { AuthService } from '../../../services/auth/auth.service';
import { CustomToasterService } from '../../../services/custom-toaster/custom-toaster.service';
import { forkJoin, map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../utils/cart.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, TopPanelComponent, ProductsFetchComponent, SubTotalComponent, GeneralbuttonComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  buttonStyle = {
    'width' : '100%',
    'height' : '35px',
    'background-color' : 'var(--primaryAccentColor)',
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center',
    'padding' : '0 20px',
    'color' : '#fff',
    'font-weight' : '600',
  }
  isLoading = false;
  user = inject(UserCrudService);
  cartService = inject(CartCrudService);
  userData: any;
  cartItem: any;
  cartItemWithItemName: any = [];
  auth = inject(AuthService);

  toaster = inject(CustomToasterService)
  loadingCart = false;
  userService = inject(UserCrudService);

  ngOnInit(): void {
    this.getUserData();
  }
  
  getUserData() {
    this.isLoading = true;
  
    const uid = sessionStorage.getItem("uid");
    if (uid) {
      this.user.getUser({ Id: uid }).pipe(
        switchMap((user: any) =>
          this.cartService.getCartItems({ Id: user.cartId }).pipe(
            switchMap((cartData: any) => {
              this.userData = cartData;
              this.cartItem = cartData.cartItems;
  
              // Map cart items to include product details
              const productObservables = this.cartItem.map((item: any) =>
                this.cartService.getProduct({ Id: item.itemId }).pipe(
                  map((product: any) => ({
                    item: product,
                    cartItem: item,
                  }))
                )
              );
  
              // Wait for all product details to load
              return forkJoin(productObservables);
            })
          )
        )
      ).subscribe({
        next: (cartItemsWithDetails: any) => {
          this.isLoading = false;
          this.cartItemWithItemName = cartItemsWithDetails;
          console.log("Data", this.cartItemWithItemName);
          this.auth.refreshToken();
        },
        error: (error: any) => {
          this.isLoading = false;
          this.toaster.show("error", "Failed to load user data or cart items!");
          this.auth.refreshToken();
        }
      });
    } else {
      this.isLoading = false;
    }
  }
  
  removeFromCart(itemId : string){
    this.loadingCart = true;
    const uid = sessionStorage.getItem("uid");
    if(uid != null)
      this.userService.getUser({Id: uid}).subscribe({
    next: (n : any) => {
      this.cartService.removeFromCart(itemId).subscribe({
        next: (n : any) => {
          this.loadingCart = false;
          this.toaster.show("success", n.message)
          this.toaster.show("success", "Added to cart successfully!")
        }, 
        error: (e)=> {
          this.loadingCart = false;
          this.toaster.show("error", e.message)
        }
       })
     }
  })
  }

  selectedCartItem : any[] = [];

  selectCartItem(item : any){
    this.selectedCartItem.push(item)
  }

  updateSelectedItems() {
    this.selectedCartItem = this.cartItemWithItemName
      .filter((item: any) => item.selected);
  }

  

}
