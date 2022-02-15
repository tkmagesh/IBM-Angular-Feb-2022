import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  message : string = '[Default message]';

  constructor() { }

  ngOnInit(): void {
  }

  onGreetClick(userName : string){
    this.message = `Hi ${userName}, Have a nice day!`;
  }

}
