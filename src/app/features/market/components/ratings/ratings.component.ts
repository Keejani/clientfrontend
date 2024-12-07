import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})
export class RatingsComponent {

   @Input() ratings = 0;
   @Input() reviews = 0;

}
