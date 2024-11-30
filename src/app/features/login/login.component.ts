import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { GeneralinpuOneComponent } from '../components/generalinpu-one/generalinpu-one.component';
import { GeneralbuttonComponent } from '../components/generalbutton/generalbutton.component';
import { GeneralOAuthButtonComponent } from '../components/general-oauth-button/general-oauth-button.component';
import { FooterComponent } from "../../core/components/footer/footer.component";

import { AuthService } from '../../services/authentication/auth.service';
import { CustomToasterService } from '../../services/custom-toaster/custom-toaster.service';
import { OAuth2Google } from '../../utils/api.constant';

interface LoginPayload {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    RouterLink, 
    GeneralinpuOneComponent, 
    GeneralbuttonComponent, 
    GeneralOAuthButtonComponent, 
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Dependency Injection
  private authorization = inject(AuthService);
  private router = inject(Router);
  private toaster = inject(CustomToasterService);

  // Component Properties
  payload = { email: '', password: '', role : 'BUYER' };
  errorAlert = '';
  isLoading = false;

  // Styling Configurations
  style = {
    'height': '2.5rem',
    'width': '100%',
    'border': '2px solid var(--black)',
    'padding': '0 10px',
    'outline': '0',
    'font-size': '16px',
    'font-weight': '300'
  };

  buttonStyle = {
    'height': '2.5rem',
    'width': '100%',
    'background-color': '#000',
    'border': '0',
    'padding': '0 10px',
    'outline': '0',
    'font-size': '16px',
    'font-weight': '300',
    'color': '#fff',
    'cursor': 'pointer'
  };

  oAuthButtonStyle = {
    'height': '2.7rem',
    'width': '100%',
    'background-color': '#fff',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'gap': '20px',
    'border': '2px solid #000',
    'padding': '0 10px',
    'outline': '0',
    'font-size': '16px',
    'font-weight': '300',
    'color': '#000',
    'cursor': 'pointer'
  };

  // Login Method
  login(): void {
    // Input Validation
    if (!this.payload.email || !this.payload.password) {
      this.showError('Please enter email and password');
      return;
    }

    this.isLoading = true;
    this.errorAlert = '';

    this.authorization.loginUser(this.payload).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        sessionStorage.setItem('jwt_tkn', response.token);
        sessionStorage.setItem('ref_tkn', response.refreshToken);
        sessionStorage.setItem('uid', response.user.id);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.showError(error?.message || 'Login Unsuccessful');
      }
    });
  }

  // Google OAuth Method
  googleOAuth(): void {
    window.location.href = OAuth2Google;
  }

  // Error Handling Method
  private showError(message: string): void {
    this.errorAlert = message;
    setTimeout(() => {
      this.errorAlert = '';
    }, 4000);
  }
}