import { Component, OnInit } from "@angular/core";
import { StateService } from "../state.service";
import { DataService } from "src/app/data-service";

@Component({
  selector: "app-sub-home",
  templateUrl: "./sub-home.component.html",
  styleUrls: ["./sub-home.component.scss"]
})
export class SubHomeComponent implements OnInit {
  contador: number;

  constructor(private stateService: StateService, private data: DataService) {}

  add() {
    this.data.add();
    console.log("Add");
  }

  dec() {
    this.data.dec();
  }

  ngOnInit() {
    this.data.counter.subscribe(contador => (this.contador = contador));
  }
}
