import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";
import { DataService } from "./data-service";
import { Home1Module } from "./home1/home1.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler/src/core";
import { CreateComponent } from "./lazy/create/create.component";
import { ReadComponent } from "./lazy/read/read.component";
import { NgxsModule } from "@ngxs/store";
import { TutorialState } from "./tutorial-state";

import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

@NgModule({
  declarations: [AppComponent, CreateComponent, ReadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    Home1Module,
    PageNotFoundModule,
    NgxsModule.forRoot([TutorialState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
