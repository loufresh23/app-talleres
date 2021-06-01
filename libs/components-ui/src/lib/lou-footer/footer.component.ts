import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lou-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() title: string = '';
  @Input() links: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
