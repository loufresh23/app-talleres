import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LouButtonModule } from "@lou/components-ui/lou-button";
import {LouIconModule} from "@lou/components-ui/lou-icon";
import {LouSelectModule} from "@lou/components-ui/lou-select";

const COMPONENTS = [
  LouButtonModule,
  LouIconModule,
  LouSelectModule
]

@NgModule({
  declarations: [],
  exports: [COMPONENTS],
  imports: [COMPONENTS]
})
export class LibUIModule { }
