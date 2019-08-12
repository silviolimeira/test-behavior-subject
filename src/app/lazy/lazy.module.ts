import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyRoutingModule } from "./lazy-routing.module";
import { CreateComponent } from "./create/create.component";

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, LazyRoutingModule]
})
export class LazyModule {}
