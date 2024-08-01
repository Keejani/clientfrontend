import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralId, RegisterUser } from '../../utils/user.interfaces';
import { API_BASE_URL } from '../../utils/api.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers !: HttpHeaders;

  constructor(private http : HttpClient) { 
     this.headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'X-Skip-JWT-Interceptor': 'true' 
    });
  }

  registerUser(registerUser : RegisterUser){
    return this.http.post(API_BASE_URL + `/api/v1/auth/register`, registerUser);
  }

  authorizeOAuth(generalId :GeneralId){
    return this.http.post(API_BASE_URL + `/api/v1/auth/general-verification`, generalId, {headers: this.headers});
  }

  storeJwt(token : string){
    localStorage.setItem('jwt_tkn', token);
  }
  
  generalStorageFtn(value : string, key : string){
    localStorage.setItem(key, value);
  }
  
  generalGetStorageFtn( key : string){
    return localStorage.getItem(key);
  }
}
