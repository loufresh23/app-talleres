import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
