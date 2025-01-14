import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { PaymentService } from '../../services/payment/payment.service';
import { Router } from '@angular/router';
import { UserCrudService } from '../../services/user/user-crud.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgFor, CommonModule, MatProgressBarModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  cartAddedProducts: any;

 ngOnInit(): void {
   this.loadSelectedCartItems();
 }

 items : any = [];
 loadingPaymentAndOrder = signal(false);

 paymentService = inject(PaymentService)
 userService = inject(UserCrudService)
 router = inject(Router)

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


async makePayment(): Promise<void> {
  try {
    const uid = sessionStorage.getItem('uid');
    
    if (!uid) {
      throw new Error('User not authenticated');
    }

    this.loadingPaymentAndOrder.set(true);

    // Get user details
    const user = await firstValueFrom(this.userService.getUser({ Id: uid })) as any;
    
    if (!user?.email) {
      throw new Error('User email not found');
    }

    // Prepare payment payload
    const paymentPayload: any = {
      email: user.email,
      amount: this.calculateTotal() * 100,
      callback_url: "https://dv7bzzl5-3000.uks1.devtunnels.ms/api/v1/paystack-callback/callback"
    };

    // Make payment
    const paymentResponse = await firstValueFrom(
      this.paymentService.makePayment(paymentPayload)
    ) as any;

    if (!paymentResponse?.data?.reference) {
      throw new Error('Invalid payment response');
    }

    // Prepare orders array directly - no wrapper object
    const orders = this.items.map((product: any) => ({
      cartId: product.cartItem.cartId,
      buyerId: user.id,
      itemId: product.item.id,
      vendorId: product.item.vendorId,
      quantity: product.cartItem.quantity,
      referenceId: paymentResponse.data.reference,
      amountToBePaid: product.item.price * product.cartItem.quantity
    }));

    // Send orders array directly
    await firstValueFrom(this.paymentService.createOrder(orders));

    // Open payment authorization in new window
    if (paymentResponse.data.authorization_url) {
      window.open(paymentResponse.data.authorization_url, '_blank');
      localStorage.removeItem('cart'); // Clear cart after successful payment
      this.items = [];
      this.cartAddedProducts = [];
    }

  } catch (error) {
    console.error('Payment processing failed:', error);
    // TODO: Add user notification service to show error message
  } finally {
    this.loadingPaymentAndOrder.set(false);
  }
}

cancel(){
  localStorage.removeItem('cart');
  this.router.navigate(['/cart'])
}

}
