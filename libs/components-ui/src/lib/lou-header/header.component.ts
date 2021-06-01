import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lou-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() imagen: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
