import { Component } from '@angular/core';
import { GeneralinpuOneComponent } from '../components/generalinpu-one/generalinpu-one.component';
import { GeneralbuttonComponent } from '../components/generalbutton/generalbutton.component';
import { GeneralOAuthButtonComponent } from '../components/general-oauth-button/general-oauth-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GeneralinpuOneComponent, RouterLink, GeneralOAuthButtonComponent, GeneralbuttonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
  
  oAuthButtonStyle = {
    'height' : '2.7rem',
    'width' : '100%',
    'background-color' : '#fff',
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center',
    'gap': '20px',
    'border' : '2px solid #000',
    'padding' : '0 10px',
    'outline' : '0',
    'font-size' : '16px',
    'font-weight' : '300',
    'color' : '#000',
    'cursor' : 'pointer'
  }

  login(){
    console.log("Login")
  }

}
