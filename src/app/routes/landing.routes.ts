import { Routes } from '@angular/router';
import { LandingpageComponent } from '../features/landingpage/landingpage.component';
import { LoginComponent } from '../features/login/login.component';
import { RegisterComponent } from '../features/register/register.component';
import { ForgotPasswordComponent } from '../features/forgot-password/forgot-password.component';
import { AuthorizationComponent } from '../auth/authorization/authorization.component';
import { CartComponent } from '../features/market/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    }, 
    {
        path : 'login',
        component: LoginComponent,
        title: 'Sign in to purchase'
    },
    {
        path : 'register',
        component: RegisterComponent,
        title: 'Create an account to start buying...'
    },
    {
        path : 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Reclaim your account..'
    },
    {
        path : 'authorization',
        component: AuthorizationComponent,
        title: 'Authorizing request..'
    },
    {
        path: 'cart',
        component : CartComponent
    }
];
