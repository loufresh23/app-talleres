import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LibUIModule} from "./external/lib-ui.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
