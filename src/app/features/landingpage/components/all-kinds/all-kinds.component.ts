import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-kinds',
  standalone: true,
  imports: [NgClass],
  templateUrl: './all-kinds.component.html',
  styleUrl: './all-kinds.component.css'
})
export class AllKindsComponent {

  imageSelected : string = 'https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060';



  getBackgroundStyle() {
    const imageUrl = 'https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060'; // This could be dynamic
    return `linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${imageUrl})`;
  }

  kinds : Array<any> = [
    {
      name : 'Metal',
      function: () => this.selectItem('Metal'),
      selected : true
    },
    {
      name : 'Plastic',
      function: () => this.selectItem('Plastic'),
      selected : false
    },
    {
      name : 'Glass',
      function: () => this.selectItem('Glass'),
      selected : false
    },
    {
      name : 'Wood',
      function: () => this.selectItem('Wood'),
      selected : false
    },
  ]


  selectItem(selectedName: string) {
    this.kinds.forEach(item => {
      item.selected = item.name === selectedName;
      if (item.selected) {
        // Set the appropriate image or perform any other action
        switch (item.name) {
          case 'Metal':
          case 'Plastic':
          case 'Wood':
            this.imageSelected = "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060";
            break;
          case 'Glass':
            console.log("Works!");
            this.imageSelected = "https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150913793.jpg?t=st=1721464362~exp=1721467962~hmac=cc9fffcc03f81bcbf97594da248fe82316708617771954fefb9751e62102edd5&w=740";
            break;
        }
      }
    });
  }



  

  imageCarousel(){
    return this.imageSelected;
  }

}
