import {Component, Input, OnInit} from '@angular/core';
import { state } from '../types/componentsUI';

@Component({
  selector: 'lou-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = '';
  @Input() state: state = 'default';
  @Input() disabled: boolean = false;
  @Input() mensaje: string = '';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
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
