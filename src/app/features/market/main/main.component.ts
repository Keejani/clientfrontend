import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ProductsFetchComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
