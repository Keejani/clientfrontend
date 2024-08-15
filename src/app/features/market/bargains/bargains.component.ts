import { Component } from '@angular/core';
import { GeneralbuttonComponent } from "../../components/generalbutton/generalbutton.component";
import { SubTotalComponent } from "../components/sub-total/sub-total.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";

@Component({
  selector: 'app-bargains',
  standalone: true,
  imports: [GeneralbuttonComponent, SubTotalComponent, ProductsFetchComponent, TopPanelComponent, NavbarComponent],
  templateUrl: './bargains.component.html',
  styleUrl: './bargains.component.css'
})
export class BargainsComponent {

  buttonStyle = {
    'width' : '100%',
    'height' : '35px',
    'background-color' : 'var(--primaryAccentColor)',
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center',
    'padding' : '0 20px',
    'color' : '#fff',
    'font-weight' : '600',
  }

}
