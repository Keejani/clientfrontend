import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ProductsFetchComponent, TopPanelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
