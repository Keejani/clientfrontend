import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generaladdtocartbutton',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './generaladdtocartbutton.component.html',
  styleUrl: './generaladdtocartbutton.component.css'
})
export class GeneralAddToCartbuttonComponent {
  
  @Input() label: string = 'Click me';
  @Input() buttonStyle: { [key: string]: string } = {};
  @Input() action: Function = () => {};

  onButtonClick() {
    this.action();
  }

}
