import { Component, OnInit } from "@angular/core";
import { StateService } from "src/app/home/state.service";
import { DataService } from "src/app/data-service";

@Component({
  selector: "app-home1",
  templateUrl: "./home1.component.html",
  styleUrls: ["./home1.component.scss"]
})
export class Home1Component implements OnInit {
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
