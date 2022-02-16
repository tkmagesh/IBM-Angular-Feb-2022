import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.css']
})
export class CalculatorResultComponent implements OnInit {

  @Input()
  data : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
