import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { TheVendorComponent } from "../components/the-vendor/the-vendor.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ProductsFetchComponent, TopPanelComponent, TheVendorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
