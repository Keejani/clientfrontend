import { Routes } from '@angular/router';
import { LandingpageComponent } from '../features/landingpage/landingpage.component';
import { LoginComponent } from '../features/login/login.component';
import { RegisterComponent } from '../features/register/register.component';
import { ForgotPasswordComponent } from '../features/forgot-password/forgot-password.component';
import { AuthorizationComponent } from '../auth/authorization/authorization.component';
import { CartComponent } from '../features/market/cart/cart.component';
import { BargainsComponent } from '../features/market/bargains/bargains.component';
import { SavedRetailersComponent } from '../features/market/saved-retailers/saved-retailers.component';
import { ProductPageComponent } from '../features/market/product-page/product-page.component';
import { VendorPageComponent } from '../features/market/main/vendor-page/vendor-page.component';

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
    },
    {
        path: 'bagains',
        component : BargainsComponent
    },
    {
        path: 'saved-retailers',
        component : SavedRetailersComponent
    },
    {
        path: 'products',
        component: ProductPageComponent
    },
    {
        path: 'vendor-page',
        component: VendorPageComponent
    },
];
