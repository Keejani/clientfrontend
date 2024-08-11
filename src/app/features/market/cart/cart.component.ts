import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { SubTotalComponent } from "./components/sub-total/sub-total.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, TopPanelComponent, ProductsFetchComponent, SubTotalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
