import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  cartAddedProducts: any;

 ngOnInit(): void {
   this.loadSelectedCartItems();
 }

 items : any = [];

 paymentService = inject(PaymentService)

  updateQuantity(id: number, newQuantity: number): void {
    this.items = this.items
      .map((item : any) => 
        item.item.id === id 
          ? { ...item, quantity: Math.max(0, newQuantity) }
          : item
      )
      .filter((item : any) => item.cartItem.quantity > 0);
  }

  calculateTotal(): number {
    return this.items.reduce((total : number, item : any) => 
      total + (item.item.price * item.cartItem.quantity), 0);
  }

  loadSelectedCartItems(){
    this.getAllItemsInCart().subscribe({
      next: (n : any) => {
        this.items = n;
        console.log(this.items);
        
      }
    })
  }
  
removeFromCart(product: any) {
  const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const updatedCart = currentCart.filter((item: any) => item.id !== product.id);
  
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  this.cartAddedProducts = this.cartAddedProducts.filter((id : string) => id !== product.id);
  
  this.loadSelectedCartItems();
}

incrementQuantity(product: any) {
  const cartItem = this.items.find((item : any) => item.id === product.id);
  if (cartItem) {
    cartItem.quantity++;
  }
  localStorage.setItem('cart', JSON.stringify(this.items));
  this.loadSelectedCartItems();
}

decrementQuantity(product: any) {
  const cartItem = this.items.find((item : any) => item.id === product.id);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      this.items = this.items.filter((item : any) => item.id !== product.id);
    }
  }
  localStorage.setItem('cart', JSON.stringify(this.items));
  this.calculateTotal();
}


getAllItemsInCart(): Observable<any[]> {
  return new Observable(observer => {
    // Initial cart load
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    observer.next(this.items);

    // Listen for storage changes
    const storageListener = (event: StorageEvent) => {
      if (event.key === 'cart') {
        const updatedCart = JSON.parse(event.newValue || '[]');
        observer.next(updatedCart);
      }
    };

    window.addEventListener('storage', storageListener);

    // Cleanup listener when Observable is unsubscribed
    return () => {
      window.removeEventListener('storage', storageListener);
    };
  });
}


makePayment(){
  this.paymentService.createOrder({
    
  })
}


}
