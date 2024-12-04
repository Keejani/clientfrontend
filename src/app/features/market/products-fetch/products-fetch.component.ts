import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { NgxGlideModule } from 'ngx-glide';
import { NgFor } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { MarketService } from '../../../services/market/market.service';
import { SkeletonModule } from 'primeng/skeleton';


@Component({
  selector: 'app-products-fetch',
  standalone: true,
  imports: [ProductCardComponent, NgFor, SkeletonModule, NgxGlideModule, CarouselModule],
  templateUrl: './products-fetch.component.html',
  styleUrl: './products-fetch.component.css',

})
export class ProductsFetchComponent {

  responsiveOptions: any[] | undefined;

  ngOnInit() {

    this.getAllItems()

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}

  glideOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    autoplay: 3000,
    loop: false
  };

  marketService = inject(MarketService)
  
  products : Array<any> = []

  itemsLoading = false;

  getAllItems(){
    this.itemsLoading = true;
    this.marketService.getCartItems().subscribe({
      next: (n : any) => {
        this.itemsLoading = false;
        this.products = n
      }
    })
  }


  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;


  

  // ngAfterViewInit(): void {
  //   this.scrollContainer.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
  //     event.preventDefault();
  //   });

  //   this.scrollContainer.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
  //     this.isDown = true;
  //     this.startX = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
  //     this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
  //     this.scrollContainer.nativeElement.classList.add('active');
  //   });

  //   this.scrollContainer.nativeElement.addEventListener('mouseleave', () => {
  //     this.isDown = false;
  //     this.scrollContainer.nativeElement.classList.remove('active');
  //   });

  //   this.scrollContainer.nativeElement.addEventListener('mouseup', () => {
  //     this.isDown = false;
  //     this.scrollContainer.nativeElement.classList.remove('active');
  //   });

  //   this.scrollContainer.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
  //     if (!this.isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
  //     const walk = (x - this.startX) * 3; // Adjust the multiplier to speed up or slow down the scroll
  //     this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  //   });
  // }

}
