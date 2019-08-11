import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { StateService } from "./state.service";
import { DataService } from "../data-service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler/src/core";
import { Home1Component } from "../home1/home1/home1.component";
import { Home1Module } from "../home1/home1.module";
import { SubHomeComponent } from './sub-home/sub-home.component';

@NgModule({
  declarations: [HomeComponent, SubHomeComponent],
  providers: [StateService, DataService],
  imports: [CommonModule]
})
export class HomeModule {}
