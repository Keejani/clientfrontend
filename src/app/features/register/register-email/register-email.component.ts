import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GeneralinpuOneComponent } from "../../components/generalinpu-one/generalinpu-one.component";
import { GeneralbuttonComponent } from "../../components/generalbutton/generalbutton.component";
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { CustomToasterService } from '../../../services/custom-toaster/custom-toaster.service';

@Component({
  selector: 'app-register-email',
  standalone: true,
  imports: [GeneralinpuOneComponent, NgIf, RouterLink, NgStyle, ReactiveFormsModule, NgClass, NgStyle, GeneralbuttonComponent, FooterComponent],
  templateUrl: './register-email.component.html',
  styleUrl: './register-email.component.css'
})
export class RegisterEmailComponent implements OnInit {
  currentStep = 1;
  registerForm!: FormGroup;
  otpForm! : FormGroup;
  
  // Lottie animation options
  // lottieOptions: AnimationOptions = {
  //   path: '/assets/confetti-animation.json' // Path to your Lottie JSON file
  // };

  style = {
    'height' : '2.5rem',
    'width' : '100%',
    'border' : '2px solid var(--black)',
    'padding' : '0 10px',
    'border-radius' : '0',
    'outline' : '0',
    'font-size' : '16px',
    'font-weight' : '300'
  }

  constructor(private fb: FormBuilder, private toaster : CustomToasterService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  passwordMatchValidator(g: FormGroup) {
    // return g.get('password').value === g.get('confirmPassword').value
      // ? null : {'mismatch': true};
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.currentStep === 1 && this.registerForm.valid) {
      this.nextStep();
    } else if (this.currentStep === 2 && this.otpForm.valid) {
      this.nextStep();
    } else {
      this.toaster.show('error', 'All fields required!')
    }
  }

  goToMarket() {
    // Implement navigation to market page
  }

  // animationCreated(animationItem: AnimationItem): void {
  //   console.log(animationItem);
  // }
}