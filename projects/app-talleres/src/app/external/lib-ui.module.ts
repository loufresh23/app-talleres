import { NgModule } from '@angular/core';

import { LouButtonModule } from "@lou/components-ui/lou-button";
import { LouIconModule } from "@lou/components-ui/lou-icon";
import { LouSelectModule } from "@lou/components-ui/lou-select";
import { LouInputModule } from "@lou/components-ui/lou-input";
import {LouHeaderModule} from "@lou/components-ui/lou-header";
import {LouFooterModule} from "@lou/components-ui/lou-footer";

const COMPONENTS = [
  LouButtonModule,
  LouIconModule,
  LouSelectModule,
  LouInputModule,
  LouHeaderModule,
  LouFooterModule
]

@NgModule({
  declarations: [],
  exports: [COMPONENTS],
  imports: [COMPONENTS]
})
export class LibUIModule { }
