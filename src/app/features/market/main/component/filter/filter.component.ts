import { Component } from '@angular/core';
import { GeneralbuttonComponent } from "../../../../components/generalbutton/generalbutton.component";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [GeneralbuttonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  buttonStyle = {
    'width' : '100%',
    'height' : '3rem',
    'display' : 'flex',
    'align-items' : 'center',
    'font-weight' : '600',
    'color': '#fff',
    'font-size' : '20px',
    'justify-content' : 'center',
    'background-color' : 'var(--primaryAccentColor)'
  }

}
