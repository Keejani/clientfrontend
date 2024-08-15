import { Component } from '@angular/core';
import { GeneralbuttonComponent } from "../../../components/generalbutton/generalbutton.component";

@Component({
  selector: 'app-sub-total',
  standalone: true,
  imports: [GeneralbuttonComponent],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent {

  buttonStyle = {
    'width' : '100%',
    'height' : '50px',
    'background-color' : 'var(--primaryAccentColor)',
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center',
    'padding' : '0 20px',
    'color' : '#fff',
    'font-weight' : '600',
    'margin-block-start': '30px'
  }

}
