import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generalbuybutton',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './generalbuybutton.component.html',
  styleUrl: './generalbuybutton.component.css'
})
export class GeneralbuybuttonComponent {

  @Input() label: string = 'Click me';
  @Input() buttonStyle: { [key: string]: string } = {};
  @Input() action: Function = () => {};

  onButtonClick() {
    this.action();
  }

}
