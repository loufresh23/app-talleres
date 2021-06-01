import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {LouIconModule} from "@lou/components-ui/lou-icon";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LouIconModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LouHeaderModule { }
