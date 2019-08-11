import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found/page-not-found.component";
import { Home1Component } from "./home1/home1/home1.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Home" }
  },
  {
    path: "home1",
    component: Home1Component,
    data: { title: "Home1" }
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
