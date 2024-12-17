import { Component, inject, Input } from '@angular/core';
import { GeneralbuttonComponent } from "../../../components/generalbutton/generalbutton.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-total',
  standalone: true,
  imports: [GeneralbuttonComponent, CommonModule],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent {

  @Input() cartItems! : any[];

  router = inject(Router);

  buttonStyle = {
    'width' : '100%',
    'height' : '50px',
    'background-color' : 'var(--primaryAccentColor)',
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center',
    'padding' : '0 20px',
    'color' : '#fff',
    'font-weight' : '600',
    'margin-block-start': '30px'
  }

  subtotal = 0;
  serviceCharges = 50; // Example fixed service charge
  tax = 0;
  total = 0;

  ngOnChanges(): void {
    this.calculateTotals();
  }

  calculateTotals() {
    // Calculate subtotal
    this.subtotal = this.cartItems.reduce((sum, item) => 
      sum + (item.item.price * item.cartItem.quantity), 0);
    
    // Calculate tax (example: 10% of subtotal)
    this.tax = this.subtotal * 0.1;
    
    // Calculate total
    this.total = this.subtotal + this.serviceCharges + this.tax;
  }

  checkOut(){
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.router.navigate(['/payment'])
  }

}
