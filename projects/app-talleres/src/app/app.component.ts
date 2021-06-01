import {Component} from '@angular/core';

interface Persona {
  id: number,
  nombre: string,
  situacion: number,
}

interface Curso {
  id: number,
  nombre: string,
  descripcion: string,
  img: string,
  fecha: string,
  hora: string,
  instructor: Instructor,
  temario: string
}

interface Instructor {
  id: number
  nombre: string,
  especialidad: string[]
}

interface Enlace {
  name: string,
  url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-talleres';

  personas: Persona[] = [
    {id: 1, nombre: 'Luis', situacion: 1},
    {id: 2, nombre: 'Juan', situacion: 1},
    {id: 3, nombre: 'Ricardo', situacion: 1},
  ]

  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular',
      descripcion: 'En esta taller aprenderas algo de Angular',
      img: 'https://bit.ly/3c6bvSy',
      fecha: '15/05/2021',
      hora: '20:00 hrs',
      instructor: {id: 1, nombre: 'Luis Vilcarromero', especialidad: ['angular']},
      temario: ''
    },
  ]

  enlaces: Enlace[] = [
    {name: 'Términos y condiciones',url: 'www.youtube.com'},
    {name: 'Talleres',url: 'www.youtube.com'},
    {name: 'Preguntas frecuentes',url: 'www.youtube.com'},
    {name: 'Contactános',url: 'www.youtube.com'},
  ]
}
