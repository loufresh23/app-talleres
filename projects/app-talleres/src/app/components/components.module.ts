import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "./card/card.component";
import {LouButtonModule} from "@lou/components-ui/lou-button";
import {LouIconModule} from "@lou/components-ui/lou-icon";
import {RouterModule} from "@angular/router";

const COMPONENTS = [
  CardComponent
]

@NgModule({
  declarations: [
    COMPONENTS,

  ],
  exports: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    LouButtonModule,
    LouIconModule,
    RouterModule
  ]
})
export class ComponentsModule { }
