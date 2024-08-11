import { Component } from '@angular/core';
import { RatingsComponent } from "../ratings/ratings.component";

@Component({
  selector: 'app-the-vendor',
  standalone: true,
  imports: [RatingsComponent],
  templateUrl: './the-vendor.component.html',
  styleUrl: './the-vendor.component.css'
})
export class TheVendorComponent {


    vendorItems : Array<any> = [
      {
        img: "https://img.freepik.com/free-photo/dirty-dumped-objects-assortment_23-2148996948.jpg?ga=GA1.2.1900006000.1721461402&semt=ais_hybrid",
        price: 22039,
        bargain: false
      },
      {
        img: "https://img.freepik.com/free-photo/dirty-dumped-objects-assortment_23-2148996948.jpg?ga=GA1.2.1900006000.1721461402&semt=ais_hybrid",
        price: 22039,
        bargain: false
      },
      {
        img: "https://img.freepik.com/free-photo/dirty-dumped-objects-assortment_23-2148996948.jpg?ga=GA1.2.1900006000.1721461402&semt=ais_hybrid",
        price: 22039,
        bargain: false
      },
      {
        img: "https://img.freepik.com/free-photo/dirty-dumped-objects-assortment_23-2148996948.jpg?ga=GA1.2.1900006000.1721461402&semt=ais_hybrid",
        price: 32039,
        bargain: true
      },
      {
        img: "https://img.freepik.com/premium-photo/stack-old-metal-pieces-industrial-concept-suitable-backgrounds-recycling-themes_153912-48479.jpg?ga=GA1.2.1900006000.1721461402&semt=ais_hybrid",
        price: 1039,
        bargain: true
      },
      {
        img: "https://img.freepik.com/premium-photo/stack-old-metal-pieces-industrial-concept-suitable-backgrounds-recycling-themes_153912-48479.jpg?ga=GA1.2.1900006000.1721461402&semt=ais_hybrid",
        price: 3039,
        bargain: false
      },
    ]
}
