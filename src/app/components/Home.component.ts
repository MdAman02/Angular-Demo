import { Component } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent {
  constructor(){
    console.log("home component rendering");
  }
}