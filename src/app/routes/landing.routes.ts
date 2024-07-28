import { Routes } from '@angular/router';
import { LandingpageComponent } from '../features/landingpage/landingpage.component';
import { LoginComponent } from '../features/login/login.component';
import { RegisterComponent } from '../features/register/register.component';
import { ForgotPasswordComponent } from '../features/forgot-password/forgot-password.component';

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
    }
];
