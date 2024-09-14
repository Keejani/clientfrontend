import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { TheVendorComponent } from "../components/the-vendor/the-vendor.component";
import { FilterComponent } from "./component/filter/filter.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ProductsFetchComponent, TopPanelComponent, TheVendorComponent, FilterComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
