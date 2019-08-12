import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReadComponent } from "../lazy1/read/read.component";

const routes: Routes = [{ path: "", component: ReadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule {}
