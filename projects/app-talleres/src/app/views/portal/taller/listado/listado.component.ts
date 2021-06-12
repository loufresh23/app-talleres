import {Component, OnInit} from '@angular/core';
import {Instructor, Taller} from "../../interfaces/taller";
import {TallerService} from "../../services/taller.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  formulario!: FormGroup;
  talleres: Taller[] = [];
  loader: boolean = false;

  constructor(private tallerService: TallerService, private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      inicio: [''],
      fin: ['']
    });

    this.getTalleres();
  }

  getTalleres(): void {
    this.loader = true;
    this.tallerService.filterTaller(this.formulario)
      .pipe(delay(400))
      .subscribe(talleres => {
        this.talleres = talleres
        this.loader = false;
      });
  }

  reset() {
    this.formulario.reset(
      {inicio: '', fin: ''}
    );
    this.getTalleres();
  }

}
