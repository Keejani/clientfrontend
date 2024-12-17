import { Component, inject, OnInit, signal } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { NumbersOnlyDirective } from '../../../utils/directives/numbers-only-directive';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, CommonModule, NumbersOnlyDirective, RouterLink, FormsModule, TopPanelComponent, ProductsFetchComponent, SubTotalComponent, GeneralbuttonComponent, FooterComponent],
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
  isLoading = signal(false);
  user = inject(UserCrudService);
  cartService = inject(CartCrudService);
  userData: any;
  cartItem: any;
  cartItemWithItemName: any = [];
  auth = inject(AuthService);

  toaster = inject(ToastrService)
  loadingCart = false;
  userService = inject(UserCrudService);

  ngOnInit(): void {
    this.getUserData();
  }
  
  getUserData() {
    this.isLoading.set(true);
  
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
              this.isLoading.set(false);

              // Wait for all product details to load
              return forkJoin(productObservables);
            })
          )
        )
      ).subscribe({
        next: (cartItemsWithDetails: any) => {
          this.isLoading.set(false);
          this.cartItemWithItemName = cartItemsWithDetails;
          console.log("Data", this.cartItemWithItemName);
          this.auth.refreshToken();
        },
        error: (error: any) => {
          this.isLoading.set(false);
          this.toaster.show("error", "Failed to load user data or cart items!");
          this.auth.refreshToken();
        }
      });
    } else {
      this.isLoading.set(false);
    }
  }
  
  removeFromCart(itemId : string) {
    this.loadingCart = true;
    const uid = sessionStorage.getItem("uid");
    if(uid != null)
      this.userService.getUser({Id: uid}).subscribe({
    next: (n : any) => {
      var payload :  CartItem = {
        itemId: itemId,
        cartId: n.cartId,
      }
      
      this.cartService.removeFromCart(itemId).subscribe({
        next: (n : any) => {
          this.loadingCart = false;
          this.getUserData()
          this.toaster.success("removed from cart successfully!")
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
    this.selectedCartItem.push(item);
    localStorage.setItem('cart', JSON.stringify(this.selectedCartItem))
  }

  updateSelectedItems() {
    this.selectedCartItem = this.cartItemWithItemName
      .filter((item: any) => item.selected);
  }

  

}
