import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { NgxGlideModule } from 'ngx-glide';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-fetch',
  standalone: true,
  imports: [ProductCardComponent, NgFor, NgxGlideModule],
  templateUrl: './products-fetch.component.html',
  styleUrl: './products-fetch.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductsFetchComponent {

  glideOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    autoplay: 3000,
    loop: false
  };

  products = [
    {
      name: "Metal",
      startBargain: "100",
      currentBargain: "22,030.00",
      purchaseType : true,
      surports: [
        'truck', 'package'
      ]
    },
    {
      name: "Glass",
      startBargain: "2,490.00",
      currentBargain: "40,204.00",
      purchaseType : false,
      surports: [
        'truck', 'package'
      ]
    },
    {
      name: "Scrap Metal",
      startBargain: "134.30",
      currentBargain: "434,000.00",
      purchaseType : true,
      surports: [
        'truck', 'package'
      ]
    },
    {
      name: "Metal",
      startBargain: "23,044.32",
      currentBargain: "237,000.00",
      purchaseType : false,
      surports: [
        'truck', 'package'
      ]
    },
    {
      name: "Metal",
      startBargain: "23,000.00",
      currentBargain: "232,034.00",
      purchaseType : true,
      surports: [
        'truck', 'package'
      ]
    },
  ]



  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  ngOnInit(): void {}

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
