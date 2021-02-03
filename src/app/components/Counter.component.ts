import { Component } from '@angular/core';

@Component({
  selector: "Counter",
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.scss']
})

export class CounterComponent {
  counter = 0;

  constructor() {
    console.log("nested component rendered");
  }

  onClick(counter, offset) {
    this.counter = counter+offset;
  }
}