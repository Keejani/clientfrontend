import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { NgxGlideModule } from 'ngx-glide';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgxGlideModule, TopPanelComponent, ProductsFetchComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductPageComponent {

  glideOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
  };

  listOfCards : Array<any> = [
    {
      img : "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996942.jpg?t=st=1723880726~exp=1723884326~hmac=3dda895000db0954e0e7f5b1b385d4c056b5bb4be59ccbf60f3da0a4f2702053&w=740"
    },
    {
      img : "https://img.freepik.com/premium-photo/closeup-metal-scraps-being-used-create-kinetic-sculpture-using-metal-scraps-create-kinetic-sculpture_538213-88146.jpg?w=996"
    },
    {
      img : "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996943.jpg?t=st=1723880686~exp=1723884286~hmac=add8e19fb3bf14739182e02464cbe8f2a59129ffcb388deec07d5f53bf379838&w=996"
    },

  ]

  rating = 4.5;
  totalReviews = 23;
  reviews = [
    { username: 'User Name', date: 'Thursday, 2nd June, 2024', content: 'Review content here...' },
    // Add more review objects
  ];

  product = {
    name: 'Recycled Plastic Pellets',
    purpose: 'Raw material for plastic manufacturing',
    initialBid: 230.00,
    currentBid: 509.00,
    currency: 'GHC',
    type: 'Plastic',
    recycleGrade: 'HDPE',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo tincidunt nisi est aliquam nunc turpis adipiscing neque quam. Dictum enim in massa diam dolor scelerisque nullam commodo. Vivamus nunc vitae montes imperdiet mauris faucibus vitae enim lectus. Quisque porttitor aliquam pharetra facilisi duis.'
  };

  vendor = {
    name: 'Eco Plastics Ltd',
    image: 'https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production_645730-185.jpg?t=st=1723879011~exp=1723882611~hmac=b141bf4cd367918992bb8c3422606c968c596df02d44906c5142b10f2178184a&w=996'
  };

  placeBid() {
    // Implement bid logic
  }

  addToCart() {
    // Implement add to cart logic
  }

  saveForLater() {
    // Implement save for later logic
  }

}
