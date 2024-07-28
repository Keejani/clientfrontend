import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GeneralOAuthButtonComponent } from '../components/general-oauth-button/general-oauth-button.component';
import { GeneralbuttonComponent } from '../components/generalbutton/generalbutton.component';
import { GeneralinpuOneComponent } from '../components/generalinpu-one/generalinpu-one.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, GeneralOAuthButtonComponent, GeneralbuttonComponent, GeneralinpuOneComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

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
    'background-color' : '#000',
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center',
    'gap': '20px',
    'border' : '2px solid #000',
    'padding' : '0 10px',
    'outline' : '0',
    'font-size' : '16px',
    'font-weight' : '300',
    'color' : '#FFF',
    'cursor' : 'pointer'
  }

}
