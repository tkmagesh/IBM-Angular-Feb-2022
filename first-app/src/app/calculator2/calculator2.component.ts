import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
  n1 : number = 0;
  n2 : number = 0;
  result : number = 0;
  op : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCalculateClick(){
    switch (this.op) {
      case "add":
        this.result = this.n1 + this.n2;
        break;
      case "subtract":
        this.result = this.n1 - this.n2;
        break;
      case "multiply":
        this.result = this.n1 * this.n2;
        break;
      case "divide":
        this.result = this.n1 / this.n2;
        break;
      default:
        break;
    }
  }

  onDemoClick(val : string){
    console.log(val)
  }
}
