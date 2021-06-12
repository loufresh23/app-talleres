import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./views/auth/login/login.component";
import {PortalModule} from "./views/portal/portal.module";
import {LibUIModule} from "./external/lib-ui.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    LibUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
