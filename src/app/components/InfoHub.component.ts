import { Component } from '@angular/core';

@Component({
  selector: 'InfoHub',
  templateUrl: './InfoHub.component.html',
  styleUrls: ['./InfoHub.component.scss']
})
export class InfoHubComponent {
  constructor() {
    console.log("InfoHub Component rendered");
  }
}