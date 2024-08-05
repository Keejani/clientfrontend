import { Component } from '@angular/core';
import { GeneralinpuOneComponent } from '../../components/generalinpu-one/generalinpu-one.component';
import { GeneralAddToCartbuttonComponent } from "../components/generaladdtocartbutton/generaladdtocartbutton.component";
import { GeneralbuybuttonComponent } from "../components/generalbuybutton/generalbuybutton.component";
import { RatingsComponent } from "../components/ratings/ratings.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [GeneralinpuOneComponent, GeneralAddToCartbuttonComponent, GeneralbuybuttonComponent, RatingsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  supports : Array<any> = [
    "delivery"
  ]

  addToCartButtonStyle = {
   
    'height' : '2rem',
    'width' : '9rem',
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

}
