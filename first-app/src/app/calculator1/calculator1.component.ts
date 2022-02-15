import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component implements OnInit {

  n1 : number = 0;
  n2 : number = 0;
  result : number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    this.result = this.n1 + this.n2;
  }
  onSubtractClick(){
    this.result = this.n1 - this.n2;
  }
  onMultiplyClick(){
    this.result = this.n1 * this.n2;
  }
  onDivideClick(){
    this.result = this.n1 / this.n2;
  }

}
