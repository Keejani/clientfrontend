import { Component, Input } from '@angular/core';
import { GeneralinpuOneComponent } from '../../components/generalinpu-one/generalinpu-one.component';
import { GeneralAddToCartbuttonComponent } from "../components/generaladdtocartbutton/generaladdtocartbutton.component";
import { GeneralbuybuttonComponent } from "../components/generalbuybutton/generalbuybutton.component";
import { RatingsComponent } from "../components/ratings/ratings.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CommonModule, GeneralinpuOneComponent, GeneralAddToCartbuttonComponent, GeneralbuybuttonComponent, RatingsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product : any;

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

}
