import { Component } from '@angular/core';
import { GeneralinpuOneComponent } from '../../components/generalinpu-one/generalinpu-one.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [GeneralinpuOneComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  supports : Array<any> = [
    "delivery"
  ]

}
