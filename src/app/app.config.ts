import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideQuillConfig } from 'ngx-quill'
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './services/jwtInterceptor/jwt.interceptor';
import { CustomToasterService } from './services/custom-toaster/custom-toaster.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideQuillConfig({
      modules: {
        syntax: true
      }
    }),
     provideHttpClient(withInterceptors([jwtInterceptor])), 
     { provide: LocationStrategy, useClass: HashLocationStrategy },
     CustomToasterService, 
     provideAnimationsAsync()]
};
