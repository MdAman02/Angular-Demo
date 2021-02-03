import { Component, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ToDo',
  templateUrl: './ToDo.component.html',
  styleUrls: ['ToDo.component.scss']  
})

export class ToDoComponent {
  list:Array<string> = [
    "Bank deposit",
    "Food Delivery",
    "Maintainence"
  ];

  constructor() {
    console.log("ToDo Component Called");
  }

  onSubmit(): void {
    let newTask = (<HTMLInputElement>document.getElementById("taskinp")).value
    this.list.push(newTask);
    (<HTMLInputElement>document.getElementById("taskinp")).value = "";
  }
}