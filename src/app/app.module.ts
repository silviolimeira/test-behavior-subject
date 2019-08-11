import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";
import { DataService } from "./data-service";
import { Home1Module } from "./home1/home1.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler/src/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    Home1Module,
    PageNotFoundModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
