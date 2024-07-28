import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-oauth-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './general-oauth-button.component.html',
  styleUrl: './general-oauth-button.component.css'
})
export class GeneralOAuthButtonComponent {

  @Input() label: string = 'Click me';
  @Input() image: string = '';
  @Input() buttonStyle: { [key: string]: string } = {};
  @Input() action: Function = () => {};

  onButtonClick() {
    this.action();
  }

}
