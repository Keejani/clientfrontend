import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { TheVendorComponent } from "../components/the-vendor/the-vendor.component";
import { FilterComponent } from "./component/filter/filter.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { MarketService } from '../../../services/market/market.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ProductsFetchComponent, SkeletonModule, TopPanelComponent, TheVendorComponent, FilterComponent, FooterComponent, ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  marketService = inject(MarketService)

  ngOnInit(): void {
    this.getAllItems()
  }

  Items : Array<any> = []

  itemsLoading = false;

  getAllItems(){
    this.itemsLoading = true;
    this.marketService.getCartItems().subscribe({
      next: (n : any) => {
        this.itemsLoading = false;
        this.Items = n
      }
    })
  }

}
