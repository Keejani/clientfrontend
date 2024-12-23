import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { GeneralbuttonComponent } from '../../features/components/generalbutton/generalbutton.component';
import { GeneralOAuthButtonComponent } from '../../features/components/general-oauth-button/general-oauth-button.component';
import { AuthService } from '../../services/authentication/auth.service';
import { CustomToasterService } from '../../services/custom-toaster/custom-toaster.service';
import { OAuth2Google } from '../../utils/api.constant';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: 'login-dialog.component.html',
  styles: [`
    .dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .dialog-content {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      width: 90%;
      max-width: 400px;
      position: relative;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      border: none;
      background: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #666;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }

    .close-button:hover {
      background-color: #f5f5f5;
    }

    .dialog-header {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .dialog-header h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .dialog-header p {
      color: #666;
      font-size: 0.9rem;
    }

    .error-alert {
      background-color: #fee2e2;
      color: #dc2626;
      padding: 0.75rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 0.5rem;
    }

    .divider {
      position: relative;
      text-align: center;
      margin: 1.5rem 0;
    }

    .divider::before,
    .divider::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 45%;
      height: 1px;
      background-color: #e5e7eb;
    }

    .divider::before {
      left: 0;
    }

    .divider::after {
      right: 0;
    }

    .divider span {
      background-color: white;
      padding: 0 1rem;
      color: #6b7280;
      font-size: 0.9rem;
    }

    .oauth-section {
      margin-bottom: 1rem;
    }

    .dialog-footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.9rem;
    }

    .dialog-footer a {
      color: #000;
      text-decoration: none;
      font-weight: 500;
    }

    .dialog-footer a:hover {
      text-decoration: underline;
    }

    .forgot-password {
      display: block;
      margin-top: 0.5rem;
      color: #6b7280 !important;
      font-weight: normal !important;
    }
  `]
})
export class LoginDialogComponent {
  // Dependency Injection
  private authorization = inject(AuthService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private toaster = inject(CustomToasterService);

  // Component Properties
  payload = { email: '', password: '', role: 'BUYER' };
  errorAlert = '';
  isLoading = false;

  // Styling Configurations
  inputStyle = {
    'height': '2.5rem',
    'width': '100%',
    'border': '1px solid #e5e7eb',
    'padding': '0 1rem',
    'outline': '0',
    'font-size': '0.9rem',
    'font-weight': '400',
    'border-radius': '6px',
  };

  buttonStyle = {
    'height': '2.75rem',
    'width': '100%',
    'background-color': '#000',
    'border': '0',
    'padding': '0 1rem',
    'outline': '0',
    'font-size': '0.9rem',
    'font-weight': '500',
    'color': '#fff',
    'cursor': 'pointer',
    'border-radius': '6px',
    'transition': 'background-color 0.2s'
  };

  oAuthButtonStyle = {
    'height': '2.75rem',
    'width': '100%',
    'background-color': '#fff',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'gap': '0.75rem',
    'border': '1px solid #e5e7eb',
    'padding': '0 1rem',
    'outline': '0',
    'font-size': '0.9rem',
    'font-weight': '500',
    'color': '#000',
    'cursor': 'pointer',
    'border-radius': '6px',
    'transition': 'background-color 0.2s'
  };

  // Methods
  login(): void {
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
        this.close();
        this.router.navigate(['']);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.showError(error?.error.message || 'Login Unsuccessful');
      }
    });
  }

  googleOAuth(): void {
    window.location.href = OAuth2Google;
  }

  private showError(message: string): void {
    this.errorAlert = message;
    setTimeout(() => {
      this.errorAlert = '';
    }, 4000);
  }

  close(): void {
    this.dialog.closeAll()
    // Implement dialog close logic here
    // You might want to use a service or emit an event to handle this
  }

  closeDialog(event: MouseEvent): void {
    if ((event.target as HTMLElement).className === 'dialog-overlay') {
      this.close();
    }
  }
}