import {Component, Input, OnInit} from '@angular/core';
import {state} from "@lou/components-ui/types/componentsUI";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'lou-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() state: state = 'default';
  @Input() disabled: boolean = false;
  @Input() lista: any[] = [];
  @Input() mensaje: string = '';

  value: string = '';
  isDisabled: boolean = false;
  onTouched!: () => void;
  onChange!: (value: string) => void;

  constructor() { }

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
