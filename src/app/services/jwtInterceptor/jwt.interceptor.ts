import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
// Get the JWT token from localStorage (or wherever you store it)
const token = sessionStorage.getItem('jwt_tkn');

if (req.headers.get('X-Skip-JWT-Interceptor')) {
  return next(req);
}

if(req.url.includes("api.paystack.co")){
  return next(req);
}


const authService = inject(AuthService)

const uid  = sessionStorage.getItem("uid");

if(uid == null){
  authService.loginDialog()
}


if (token) {
  // Clone the request and add the token to the Authorization header
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(clonedRequest);
} else {
}

// If no token, proceed with the original request
return next(req);
};
