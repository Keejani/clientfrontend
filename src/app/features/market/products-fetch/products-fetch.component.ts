import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products-fetch',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-fetch.component.html',
  styleUrl: './products-fetch.component.css'
})
export class ProductsFetchComponent {

}
