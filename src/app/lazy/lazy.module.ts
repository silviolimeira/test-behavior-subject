import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyRoutingModule } from "./lazy-routing.module";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";

@NgModule({
  declarations: [CreateComponent, ReadComponent],
  imports: [CommonModule, LazyRoutingModule]
})
export class LazyModule {}
