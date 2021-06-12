import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListadoComponent} from "./taller/listado/listado.component";
import {DetalleComponent} from "./taller/detalle/detalle.component";

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'talleres'
  },

  { path: 'talleres',
    pathMatch: 'full',
    component: ListadoComponent,
  },
  {
    path: 'talleres/:id',
    component: DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PortalRoutingModule { }
