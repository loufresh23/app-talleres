import {Component, Input, OnInit} from '@angular/core';
import {state} from "@lou/components-ui/types/componentsUI";

@Component({
  selector: 'lou-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() label: string = '';
  @Input() state: state = 'default';
  @Input() disabled: boolean = false;
  @Input() lista: any[] = [];
  mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  get estado(): string {
    switch (this.state) {
      case "valid":
        this.mensaje = 'Campo válido'
        return `valid`;
      case "error":
        this.mensaje = 'Campo inválido'
        return `invalid`;
      default:
        return '';
    }
  }

}
