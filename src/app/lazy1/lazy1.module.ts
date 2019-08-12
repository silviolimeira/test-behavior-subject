import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReadComponent } from "./read/read.component";
import { Lazy1RoutingModule } from "./lazy1-routing.module";

@NgModule({
  declarations: [ReadComponent],
  imports: [CommonModule, Lazy1RoutingModule]
})
export class Lazy1Module {}
