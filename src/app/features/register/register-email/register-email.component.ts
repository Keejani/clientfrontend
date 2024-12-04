import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { GeneralinpuOneComponent } from "../../components/generalinpu-one/generalinpu-one.component";
import { GeneralbuttonComponent } from "../../components/generalbutton/generalbutton.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { CustomToasterService } from '../../../services/custom-toaster/custom-toaster.service';
import { AuthService } from '../../../services/auth/auth.service';
import { MessageService } from 'primeng/api';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register-email',
  standalone: true,
  imports: [
    GeneralinpuOneComponent,
    NgIf,
    RouterLink,
    NgStyle,
    ReactiveFormsModule,
    NgClass,
    GeneralbuttonComponent,
    FooterComponent,
    ToastModule
  ],
  templateUrl: './register-email.component.html',
  styleUrl: './register-email.component.css',
  providers: [MessageService]
})
export class RegisterEmailComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  
  currentStep = 1;
  readonly TOTAL_STEPS = 3;
  registerForm!: FormGroup;
  otpForm!: FormGroup;
  continuingEmail = '';

  readonly inputStyle = {
    height: '2.5rem',
    width: '100%',
    border: '2px solid var(--black)',
    padding: '0 10px',
    borderRadius: '0',
    outline: '0',
    fontSize: '16px',
    fontWeight: '300'
  } as const;

  // readonly PASSWORD_PATTERN = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$';
  readonly EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  readonly PHONE_PATTERN = '^[0-9]{10}$';

  constructor(
    private fb: FormBuilder,
    private toaster: CustomToasterService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initializeForms();
    this.subscribeToQueryParams();
  }

  loading = false;

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initializeForms(): void {
    this.initializeRegisterForm();
    this.initializeOtpForm();
  }

  private initializeRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(this.EMAIL_PATTERN)
      ]],
      contactNumber: ['', [
        Validators.required,
        Validators.pattern(this.PHONE_PATTERN)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern(this.PASSWORD_PATTERN)
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  private initializeOtpForm(): void {
    this.otpForm = this.fb.group({
      otp: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^[0-9]{6}$')
      ]]
    });
  }

  private subscribeToQueryParams(): void {
    const paramsSub = this.route.queryParams.subscribe(params => {
      this.continuingEmail = params['email'];
      if (this.continuingEmail) {
        this.registerForm.patchValue({ email: this.continuingEmail });
      }
    });
    this.subscriptions.push(paramsSub);
  }

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    const match = password.value === confirmPassword.value;
    return match ? null : { passwordMismatch: true };
  }

  get canProceed(): boolean {
    return this.currentStep === 1 ? this.registerForm.valid : this.otpForm.valid;
  }

  get formFields() {
    return this.registerForm.controls;
  }

  get otpControl() {
    return this.otpForm.get('otp');
  }

  nextStep(): void {
    if (this.currentStep < this.TOTAL_STEPS) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  async onSubmit(): Promise<void> {
    try {
      if (!this.canProceed) {
        this.markFormAsTouched();
        this.toaster.show('error', 'Please fill all required fields correctly');
        return;
      }

      if (this.currentStep === 1) {
        await this.handleRegistrationStep();
      } else if (this.currentStep === 2) {
        await this.handleOtpVerification();
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  private async handleRegistrationStep(): Promise<void> {
    const formData = this.registerForm.value;
    // Assuming authService has a register method
    try {
      this.loading = true;
      await this.authService.registerUser({...formData, role: 'BUYER'}).subscribe({
        next: (n : any) => {
          this.loading = false;
          console.log(n);
          if(n.status == 200 || n.status > 200 || n.status < 209 ) {
            this.toaster.show('success', n.message);
            this.nextStep();
          } else {
            this.toaster.show('error', n.message);
          }
        },
        error: (e : any) => {
          this.loading = false;          
          this.toaster.show('error', e.error.message);
        }
      });
      
    } catch (error : any) {
      this.loading = false;
      this.handleError(error);
      this.toaster.show('error', error.message);
    }
  }

  private async handleOtpVerification(): Promise<void> {
    const otp = this.otpForm.get('otp')?.value;
    try {
      // await ;
      this.nextStep();
    } catch (error) {
      this.handleError(error);
    }
  }

  private markFormAsTouched(): void {
    if (this.currentStep === 1) {
      Object.values(this.registerForm.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.otpForm.markAllAsTouched();
    }
  }

  private handleError(error: any): void {
    console.error('Registration error:', error);
    this.toaster.show('error', error.message || 'An error occurred during registration');
  }

  goToMarket(): void {
    this.router.navigate(['/market']).catch(error => {
      console.error('Navigation error:', error);
      this.toaster.show('error', 'Failed to navigate to market');
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.registerForm.get(controlName);
    if (!control?.errors || !control.touched) return '';

    const errors = control.errors;
    if (errors['required']) return `${controlName} is required`;
    if (errors['minlength']) return `${controlName} must be at least ${errors['minlength'].requiredLength} characters`;
    if (errors['pattern']) return this.getPatternErrorMessage(controlName);
    if (errors['email']) return 'Please enter a valid email address';
    
    return 'Invalid input';
  }

  private getPatternErrorMessage(controlName: string): string {
    switch (controlName) {
      case 'password':
        return 'Password must contain uppercase, lowercase, number and special character';
      case 'contactNumber':
        return 'Please enter a valid 10-digit phone number';
      case 'email':
        return 'Please enter a valid email address';
      default:
        return 'Invalid format';
    }
  }
}