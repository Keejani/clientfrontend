import { Component } from '@angular/core';
import { GeneralbuttonComponent } from '../components/generalbutton/generalbutton.component';
import { RouterLink } from '@angular/router';
import { GeneralinpuOneComponent } from '../components/generalinpu-one/generalinpu-one.component';
import { LogoComponent } from "../components/logo/logo.component";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [GeneralbuttonComponent, RouterLink, GeneralinpuOneComponent, LogoComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  style = {
    'height' : '2.5rem',
    'width' : '100%',
    'border' : '2px solid var(--black)',
    'padding' : '0 10px',
    'outline' : '0',
    'font-size' : '16px',
    'font-weight' : '300'
  }
 
  buttonStyle = {
    'height' : '2.5rem',
    'width' : '100%',
    'background-color' : '#000',
    'border' : '0',
    'padding' : '0 10px',
    'outline' : '0',
    'font-size' : '16px',
    'font-weight' : '300',
    'color' : '#fff',
    'cursor' : 'pointer'
  }

  initForgotPassword(){
    console.log('Init')
  }

}
