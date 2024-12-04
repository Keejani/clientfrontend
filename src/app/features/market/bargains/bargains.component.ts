import { Component, inject, OnInit } from '@angular/core';
import { GeneralbuttonComponent } from "../../components/generalbutton/generalbutton.component";
import { SubTotalComponent } from "../components/sub-total/sub-total.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-bargains',
  standalone: true,
  imports: [GeneralbuttonComponent, NgClass, CommonModule, ProductsFetchComponent, TopPanelComponent, NavbarComponent, FooterComponent],
  templateUrl: './bargains.component.html',
  styleUrl: './bargains.component.css'
})
export class BargainsComponent implements OnInit{

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

  ngOnInit(): void {
    this.getAllBids()
  }

  cartService = inject(CartCrudService)

  bids : any = [];

  getAllBids(){
    const userId = sessionStorage.getItem('uid');

    if(userId != null){
      this.cartService.getBids({Id: userId}).subscribe({
        next: (n : any) => {
          console.log(n);
          this.bids = n
        }
      })
    }
  }

}
