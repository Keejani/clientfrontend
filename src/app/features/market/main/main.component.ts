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
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { CustomToasterService } from '../../../services/custom-toaster/custom-toaster.service';
import { ToastrService } from 'ngx-toastr';
import { UserCrudService } from '../../../services/user/user-crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, FormsModule, SkeletonModule, TopPanelComponent, TheVendorComponent, FilterComponent, FooterComponent, ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  marketService = inject(MarketService)
  cartService = inject(CartCrudService)
  toaster = inject(ToastrService)
  userService = inject(UserCrudService)

  itemsLoading = false;
  loadingBid = false;
  bid = 0;
  bidError = "";

  ngOnInit(): void {
    this.getAllItems()
  }

  Items : Array<any> = []


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
