import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorModel } from './salary-calculator-model';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css'],
  providers : [
    /* {provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel} */
      SalaryCalculatorModel
  ]
})
export class SalaryCalculatorComponent implements OnInit {

 
  /* public model : SalaryCalculatorModel ;

  constructor(model : SalaryCalculatorModel) {
    this.model = model;
  }  */
 

  constructor(public model : SalaryCalculatorModel){

  }

  ngOnInit(): void {
  }

}
