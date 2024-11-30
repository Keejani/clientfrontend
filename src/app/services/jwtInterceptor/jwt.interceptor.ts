import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
// Get the JWT token from localStorage (or wherever you store it)
const token = sessionStorage.getItem('jwt_tkn');

if (token) {
  // Clone the request and add the token to the Authorization header
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(clonedRequest);
}

// If no token, proceed with the original request
return next(req);
};
