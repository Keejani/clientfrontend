import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../utils/api.constant';
import { LoginUser } from '../../utils/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers! : HttpHeaders;

  constructor(private http : HttpClient) { 
    this.headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'X-Skip-JWT-Interceptor': 'true' 
   });
 }

  loginUser(loginUser : LoginUser){
    return this.http.post(API_BASE_URL + `/api/v1/auth/login`, loginUser, {headers: this.headers});
  }

  
  

}
