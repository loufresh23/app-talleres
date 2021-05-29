import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lou-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() icon: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  get icono(): string {
    return `icon-${this.icon}`
  }

}
