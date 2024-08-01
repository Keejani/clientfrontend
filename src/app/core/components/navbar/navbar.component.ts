import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../utils/user.interfaces';
import { UserCrudService } from '../../../services/user/user-crud.service';
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { cartItems } from '../../../utils/cart.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(private auth : AuthService, private router: Router, private cart : CartCrudService, private user : UserCrudService){}


  menuOpened : boolean = false;
  userData! : User;
  cartItem : number = 0;
  profileToggle : boolean = false;

  ngOnInit(): void {
    this.getUserData();
    this.getCartItems();
  }

  getCartItems(){
    this.cart.getCartItems({Id :this.getUserId()}).subscribe({
      next: (n : any) => {
        this.cartItem = n.cartItems.length;
        console.log(n.cartItems)
      }
    })
  }

  menuToggle(){
    this.menuOpened =! this.menuOpened
  }

  getUserId() : string {
     const id = this.auth.generalGetStorageFtn('uId');
     console.log(id);
     if(id != null) return id;
     else return 'No Id'
  }

  toggleDropDown(){
    this.profileToggle =! this.profileToggle;
  }

  getUserData() {
    if(this.getUserId() != 'No Id'){
    this.user.getUser({Id : this.getUserId()}).subscribe({
      next: (n : any) => {
        this.userData = n;
        return n;
      },
      error: (e) => {
        console.log('Error!')
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
    localStorage.clear();
    this.profileToggle = false;
    this.router.navigate([''])
  }
}
