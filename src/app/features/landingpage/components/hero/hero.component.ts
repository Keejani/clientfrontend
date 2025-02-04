import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxGlideModule } from 'ngx-glide';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxGlideModule, RouterLink],
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

  listOfCards: Array<any> = [
    {
      title: "Title 1",
      subtitle: "Somethings about title 1",
      image: "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996942.jpg?t=st=1728722390~exp=1728725990~hmac=62fd26538d7da5eab05e5c5d21b4af5e83725d484b8a055a0de98e0e18cf787a&w=740"
    },
    {
      title: "Title 2",
      subtitle: "Somethings about title 2",
      image: "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996942.jpg?t=st=1728722390~exp=1728725990~hmac=62fd26538d7da5eab05e5c5d21b4af5e83725d484b8a055a0de98e0e18cf787a&w=740"
    },
    {
      title: "Title 3",
      subtitle: "Somethings about title 3",
      image: "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996942.jpg?t=st=1728722390~exp=1728725990~hmac=62fd26538d7da5eab05e5c5d21b4af5e83725d484b8a055a0de98e0e18cf787a&w=740"
    },
    {
      title: "Title 4",
      subtitle: "Somethings about title 4",
      image: "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996942.jpg?t=st=1728722390~exp=1728725990~hmac=62fd26538d7da5eab05e5c5d21b4af5e83725d484b8a055a0de98e0e18cf787a&w=740"
    },
    {
      title: "Title 5",
      subtitle: "Somethings about title 5",
      image: "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996942.jpg?t=st=1728722390~exp=1728725990~hmac=62fd26538d7da5eab05e5c5d21b4af5e83725d484b8a055a0de98e0e18cf787a&w=740"
    }
  ];
  

  TopRetailers : Array<string> = [
     "https://img.freepik.com/free-photo/middle-aged-cheerful-dark-skinned-male-with-shining-smile_273609-28538.jpg?ga=GA1.2.1900006000.1721461402&semt=sph",
     "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1721473657~exp=1721477257~hmac=d8a94b02718bee348f40461cbf3ea06ace3c6273a478f1144dd2e6eb1f6b03ff&w=740",
     "https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?ga=GA1.1.1900006000.1721461402&semt=sph",
     "https://img.freepik.com/premium-photo/smiling-asian-man-standing-with-hands-folded-concept-engineering-jobs_264197-8821.jpg?ga=GA1.1.1900006000.1721461402&semt=sph"
  ]
}
