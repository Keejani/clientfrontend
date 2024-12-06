import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../utils/api.constant';
import { GeneralId } from '../../utils/user.interfaces';
import { Observable } from 'rxjs';
import { CartItem } from '../../utils/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartCrudService {
  headers: HttpHeaders;


  constructor(private http : HttpClient) { 
    this.headers = new HttpHeaders({
     // 'Content-Type': 'application/json',
     'X-Skip-JWT-Interceptor': 'true' 
   });
 }

  getCartItems(id : GeneralId){
     return this.http.get(`${API_BASE_URL}/api/v1/cart/${id.Id}`)
  }

  getBids(id : GeneralId){
     return this.http.get(`${API_BASE_URL}/api/v1/cart/buyer-bids`, {
      params: {
        buyerId: id.Id
      }
     })
  }
  
  getProduct(id : GeneralId){
     return this.http.get(`${API_BASE_URL}/api/v1/cart/product`, {
      params: {
        pId: id.Id 
      },
      headers: this.headers
     })
  }

  addToCart(cartItem: CartItem): Observable<any> {
    return this.http.post(`${API_BASE_URL}/api/v1/cart/addToCart`, cartItem);
  }
 
  bidProduct(cartItem: object): Observable<any> {
    return this.http.post(`${API_BASE_URL}/api/v1/vendor/request`, cartItem);
  }

  removeFromCart(cartItem: string): Observable<any> {
    return this.http.delete(`${API_BASE_URL}/api/v1/cart/removeFromCart`, { params: {
      id : cartItem
    } });
  }
  
}
