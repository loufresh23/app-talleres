import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  title = 'AppTalleres';

  enlaces: any[] = [
    {name: 'Términos y condiciones',url: 'www.youtube.com'},
    {name: 'Talleres',url: 'www.youtube.com'},
    {name: 'Preguntas frecuentes',url: 'www.youtube.com'},
    {name: 'Contactános',url: 'www.youtube.com'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
