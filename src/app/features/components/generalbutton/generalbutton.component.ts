import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generalbutton',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './generalbutton.component.html',
  styleUrl: './generalbutton.component.css'
})
export class GeneralbuttonComponent {
  
  @Input() label: string = 'Click me';
  @Input() buttonStyle: { [key: string]: string } = {};
  @Input() action: Function = () => {};

  onButtonClick() {
    this.action();
  }

}
