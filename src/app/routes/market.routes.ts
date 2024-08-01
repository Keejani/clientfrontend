import { Routes } from '@angular/router';
import { LandingpageComponent } from '../features/landingpage/landingpage.component';
import { LoginComponent } from '../features/login/login.component';
import { RegisterComponent } from '../features/register/register.component';
import { ForgotPasswordComponent } from '../features/forgot-password/forgot-password.component';
import { MainComponent } from '../features/market/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }, 
];
