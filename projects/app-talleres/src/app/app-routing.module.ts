import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/auth/login/login.component";
import {PortalComponent} from "./views/portal/portal.component";

const routes: Routes = [
  { path: '', redirectTo: 'talleres', pathMatch: 'full'},
  { path: 'iniciar-sesion', component: LoginComponent },


  { path: '',
    component: PortalComponent,
    loadChildren: () => import('./views/portal/portal.module').then(m => m.PortalModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
