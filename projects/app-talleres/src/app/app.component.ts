import { Component } from '@angular/core';

interface persona {
  id: number,
  nombre: string,
  situacion: number,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-talleres';

  personas: persona[] = [
    {id:1,nombre:'Luis',situacion:1},
    {id:2,nombre:'Juan',situacion:1},
    {id:3,nombre:'Ricardo',situacion:1},
  ]

}
