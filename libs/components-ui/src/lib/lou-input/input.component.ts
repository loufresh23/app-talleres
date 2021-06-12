import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {state} from '../types/componentsUI';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'lou-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  value: string = '';
  isDisabled: boolean = false;
  onTouched!: () => void;
  onChange!: (value: string) => void;

  @Input() label: string = '';
  @Input() state: state = 'default';
  @Input() disabled: boolean = false;
  @Input() mensaje: string = '';
  @Input() placeholder: string = '';
  @Input() tipo: string = 'text';

  constructor() {
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  get estado(): string {
    switch (this.state) {
      case "valid":
        return `valid`;
      case "error":
        return `invalid`;
      default:
        return '';
    }
  }

}
