import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../core/components/navbar/navbar.component";
import { TopPanelComponent } from "../../components/top-panel/top-panel.component";
import { FilterComponent } from "../component/filter/filter.component";
import { ProductsFetchComponent } from "../../products-fetch/products-fetch.component";
import { TheVendorComponent } from "../../components/the-vendor/the-vendor.component";

@Component({
  selector: 'app-vendor-page',
  standalone: true,
  imports: [NavbarComponent, TopPanelComponent, FilterComponent, ProductsFetchComponent, TheVendorComponent],
  templateUrl: './vendor-page.component.html',
  styleUrl: './vendor-page.component.css'
})
export class VendorPageComponent {

}
