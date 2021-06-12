import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalRoutingModule} from "./portal-routing.module";
import {PortalComponent} from "./portal.component";
import {LibUIModule} from "../../external/lib-ui.module";
import {ComponentsModule} from "../../components/components.module";
import {ListadoComponent} from "./taller/listado/listado.component";
import {DetalleComponent} from "./taller/detalle/detalle.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {FlowerSpinnerModule} from "angular-epic-spinners";

@NgModule({
  declarations: [
    PortalComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    LibUIModule,
    ComponentsModule,
    PortalRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlowerSpinnerModule
  ]
})
export class PortalModule { }
