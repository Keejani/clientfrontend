import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../utils/api.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  headers!: HttpHeaders;

  constructor(private http : HttpClient) { 
    this.headers = new HttpHeaders({
     // 'Content-Type': 'application/json',
     'X-Skip-JWT-Interceptor': 'true' 
   });
 }

    getCartItems(){
    return this.http.get(`${API_BASE_URL}/api/v1/cart/market`, {headers : this.headers})
 }
}
