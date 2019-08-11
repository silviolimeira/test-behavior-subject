import { Component, OnInit } from "@angular/core";
import { Observer, Observable } from "rxjs";
import { StateService } from "src/app/home/state.service";
import { DataService } from "../../data-service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
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
