import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TallerService} from "../../services/taller.service";
import {Taller} from "../../interfaces/taller";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  taller: Taller = {
    id: 0,
    img: '',
    dia: '',
    temario: '',
    descripcion: '',
    nombre: '',
    hora: '',
    img2: '',
    instructor: {id: 0, nombre: ''},
    slug: ''
  };
  loader: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private tallerService: TallerService) {
    this.obtenerTaller()
  }

  obtenerTaller() {
    this.loader = true;
    this.activatedRoute.params.subscribe(
      ({id}) => this.tallerService.getTaller(id)
        .pipe(delay(400))
        .subscribe(taller => {
          if (taller) {
            this.taller = taller;
          }
          this.loader = false;
        }),
    );
  }

}
