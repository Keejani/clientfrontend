import { NgStyle } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-generalinpu-one',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './generalinpu-one.component.html',
  styleUrl: './generalinpu-one.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GeneralinpuOneComponent),
      multi: true
    }
  ]
})
export class GeneralinpuOneComponent implements ControlValueAccessor {

  @Input() type: string = 'Default Placeholder';
  @Input() placeholder: string = '';
  @Input() inputStyle: { [key: string]: string } = {
    'background-color': 'rgba(187, 187, 187, 0.18)',
    'outline': '0',
    'border': '0',
    'border-radius': '8px',
    'height': '30px',
    'padding': '0 10px',
    'font-size' : '17px',
    'width' : '100%'
  };

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

}
