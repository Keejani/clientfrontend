import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../utils/api.constant';
import { GeneralId } from '../../utils/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartCrudService {

  constructor(private http : HttpClient) { }

  getCartItems(id : GeneralId){
     return this.http.get(`${API_BASE_URL}/api/v1/cart/${id.Id}`)
  }
}
