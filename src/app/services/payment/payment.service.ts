import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../utils/api.constant';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  headers: HttpHeaders;

  constructor(private http : HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer sk_test_27d1f7bc90ff356ce02aea34a02781855849a183'
    });
  }



  paymentApiUrl = "https://api.paystack.co/transaction/initialize";
  verifyApiUrl = "https://api.paystack.co/transaction/verify/";


  makePayment(payload : object){
    return this.http.post(this.paymentApiUrl, payload, {
      headers: this.headers
    })
  }

  createOrder(payload : object){
    return this.http.post(`${API_BASE_URL}/api/v1/orders/create`, payload)
  }
 
  verfiyPayment(referenceId : string, status : boolean){
    return this.http.get(`${API_BASE_URL}/api/v1/orders/payment-status`, {
      params: {
        referenceId : referenceId,
        status : status
      }
    })
  }
  
  verifyPayment(referenceId : string){
    return this.http.get(`${this.verifyApiUrl}/${referenceId}`, {
      headers : this.headers
    })
  }
}
