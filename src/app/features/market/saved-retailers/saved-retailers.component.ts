import { Component } from '@angular/core';
import { SubTotalComponent } from "../components/sub-total/sub-total.component";
import { GeneralbuttonComponent } from "../../components/generalbutton/generalbutton.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-retailers',
  standalone: true,
  imports: [SubTotalComponent, RouterLink, GeneralbuttonComponent, ProductsFetchComponent, TopPanelComponent, NavbarComponent, FooterComponent],
  templateUrl: './saved-retailers.component.html',
  styleUrl: './saved-retailers.component.css'
})
export class SavedRetailersComponent {

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
