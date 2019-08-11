import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private counterSource = new BehaviorSubject(0);
  counter = this.counterSource.asObservable();

  constructor() {}

  add() {
    this.counterSource.next(this.counterSource.value.valueOf() + 1);
  }

  dec() {
    this.counterSource.next(this.counterSource.value.valueOf() - 1);
  }

  get() {
    this.counterSource.next(this.counterSource.value.valueOf());
  }
}
