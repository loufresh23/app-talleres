import {Component, Input, OnInit} from '@angular/core';
import {style, size, typeBtn} from "@lou/components-ui/types/componentsUI";

@Component({
  selector: 'lou-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type: typeBtn = 'filled';
  @Input() estilo: style = 'primary';
  @Input() size: size = 'sm';
  @Input() disabled: boolean = false;

  get typeBtn(): string {
    switch (this.type) {
      case "filled":
        return `btn btn-${this.estilo}`;
      case  "outline":
        return `btn btn-outline-${this.estilo}`
    }
  }

  get sizeBtn(): string {
    return `btn-${this.size}`;
  }

  get disabledBtn(): string {
    return (this.disabled) ? 'disabled' : '';
  }

  constructor() { }

  ngOnInit(): void {}

}
