import { NgClass } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../utils/user.interfaces';
import { UserCrudService } from '../../../services/user/user-crud.service';
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { cartItems } from '../../../utils/cart.interface';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, SkeletonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit{

  constructor(private auth : AuthService, private router: Router, private cart : CartCrudService, private user : UserCrudService){}


  menuOpened : boolean = false;
  userData! : any;
  cartItem : number = 0;
  profileToggle : boolean = false;

  cartService = inject(CartCrudService)


  ngOnInit(): void {
    this.getUserData();
  }

  ngAfterViewInit(): void {
    this.getUserData();
  }

  menuToggle(){
    this.menuOpened =! this.menuOpened
  }

  getUserId() : string {
     const id = this.auth.generalGetStorageFtn('uid');
     if(id != null) return id;
     else return 'No Id'
  }

  toggleDropDown(){
    this.profileToggle =! this.profileToggle;
  }

  cartRoute(){
    const uid = sessionStorage.getItem("uid");

    if(uid != null){
      this.router.navigate(['/cart'])
    } else {
      this.auth.loginDialog()
    }
  }

  isLoading = false;

  getUserData() {
    this.isLoading = true;

    const uid = sessionStorage.getItem("uid");
    if(uid != null){
      this.user.getUser({Id : uid}).subscribe({
        next: (n : any) => {
          this.userData = n;
          this.cartService.getCartItems({Id : n.cartId}).subscribe({
            next: (n : any) => {
              this.isLoading = false;
              this.cartItem = n.cartItems.length
              this.auth.refreshToken()
              return n;
            },
            error: (e) => {
            this.isLoading = false;
            this.auth.refreshToken()
          }
        })
        }
      })
    }
    return this.userData;
  }

  isLoggedIn() : boolean{
    const jwt = this.auth.generalGetStorageFtn('jwt_tkn');
    if(jwt == null) return false;
    else return true;
  }

  logout(){
    sessionStorage.clear();
    this.profileToggle = false;
    this.router.navigate([''])
  }
}
