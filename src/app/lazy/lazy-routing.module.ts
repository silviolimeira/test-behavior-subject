import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ReadComponent } from "./read/read.component";

const routes: Routes = [
  { path: "", component: CreateComponent },
  { path: "/read", component: ReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
