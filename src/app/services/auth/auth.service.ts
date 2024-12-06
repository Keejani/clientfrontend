import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GeneralId, RegisterUser } from '../../utils/user.interfaces';
import { API_BASE_URL } from '../../utils/api.constant';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../auth/login-dialog/login-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers !: HttpHeaders;
  uid: any;
  router = inject(Router)
  dialog = inject(MatDialog)

  constructor(private http : HttpClient) { 
     this.headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'X-Skip-JWT-Interceptor': 'true' 
    });
  }

  registerUser(registerUser : RegisterUser){
    return this.http.post(API_BASE_URL + `/api/v1/authorize/register`, registerUser, {headers : this.headers});
  }
 
  verifyUser(email :string , code : string){
    return this.http.post(API_BASE_URL + `/api/v1/authorize/verify-user`, {email,code}, {headers : this.headers});
  }

  refreshToken() {
    // const refreshToken = sessionStorage.getItem('ref_tkn');
    
    // if (!refreshToken) {
    //   // Handle missing refresh token
    //   return;
    // }
  
    // this.headers = new HttpHeaders({
    //   'Authorization': `Bearer ${refreshToken}`,
    //   'X-Skip-JWT-Interceptor': 'true'
    // });
  
    // this.http.post<any>(`${API_BASE_URL}/api/v1/user/refresh-token`, {}, {
    //   headers: this.headers
    // }).subscribe({
    //   next: (response: any) => {
    //     sessionStorage.setItem("jwt_tkn", response.token);
    //     sessionStorage.setItem("ref_tkn", response.refreshToken);
    //     // Only set uid if applicable in your use case
    //   },
    //   error: (error) => {
    //     console.error('Token refresh failed', error);
    //     // Handle logout or redirect to login
    //   }
    // });
  }

  authorizeOAuth(generalId :GeneralId){
    return this.http.post(API_BASE_URL + `/api/v1/auth/general-verification`, generalId, {headers: this.headers});
  }

  storeJwt(token : string){
    sessionStorage.setItem('jwt_tkn', token);
  }
  
  generalStorageFtn(value : string, key : string){
    sessionStorage.setItem(key, value);
  }
  
  generalGetStorageFtn( key : string){
    return sessionStorage.getItem(key);
  }

  loginDialog(){
    const uid = sessionStorage.getItem("uid");

    uid ?? this.dialog.open(LoginDialogComponent);
     
  }
}
