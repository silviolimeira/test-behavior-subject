import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StateService {
  observable: Observable<number>;
  observer: Observer<number>;

  contador: number = 0;

  constructor() {
    this.observable = new Observable((observer: Observer<number>) => {
      this.observer = observer;
    });
  }

  public add() {
    this.contador++;
    this.observer.next(this.contador);
    console.log("Add: ", this.contador);
  }

  public dec() {
    this.contador--;
    this.observer.next(this.contador);
    console.log("Dec: ", this.contador);
  }
}
