import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { SubTotalComponent } from "../components/sub-total/sub-total.component";
import { GeneralbuttonComponent } from "../../components/generalbutton/generalbutton.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, TopPanelComponent, ProductsFetchComponent, SubTotalComponent, GeneralbuttonComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

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

}
