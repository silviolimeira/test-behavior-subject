import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Home1Component } from "./home1/home1.component";

@NgModule({
  declarations: [Home1Component],
  imports: [CommonModule],
  exports: [Home1Component]
})
export class Home1Module {}
