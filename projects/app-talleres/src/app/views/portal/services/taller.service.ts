import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Instructor, Taller} from "../interfaces/taller";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class TallerService {

  url = environment.base_url;

  constructor(private http: HttpClient) {
  }

  getTalleres(): Observable<Taller[]> {
    return this.http.get<Taller[]>(`${this.url}/talleres`);
  }

  getTaller(id: string): Observable<Taller> {
    console.log(`${this.url}/talleres?slug=${id}`);
    return this.http.get<Taller>(`${this.url}/talleres/${id}`);
  }

  filterTaller(form: any): Observable<Taller[]> {

    let {inicio, fin} = form.value;
    let url = `${this.url}/talleres?dia_gte=${inicio}&dia_lte=${fin}`

    if (form.value.fin == '') {
      let url = `${this.url}/talleres?dia_gte=${inicio}&dia_lte=2025-05-05`
      return this.http.get<Taller[]>(url);
    }

    return this.http.get<Taller[]>(url);


  }

}
