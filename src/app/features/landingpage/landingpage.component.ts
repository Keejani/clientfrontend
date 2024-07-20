import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AllKindsComponent } from './components/all-kinds/all-kinds.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, AllKindsComponent, HeroComponent, RouterOutlet, FooterComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
