import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NgxGlideModule } from 'ngx-glide';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxGlideModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent {

  glideOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
  };

  listOfCards : Array<any> = [
    {
      title : "Title 1",
      subtitle : "Somethings about title 1"
    },
    {
      title : "Title 2",
      subtitle : "Somethings about title 2"
    },
    {
      title : "Title 3",
      subtitle : "Somethings about title 3"
    },
    {
      title : "Title 4",
      subtitle : "Somethings about title 4"
    },
    {
      title : "Title 5",
      subtitle : "Somethings about title 5"
    },
  ]
}
