import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salary-calculator-model';
import { SalaryCalculatorModelV2 } from './salary-calculator/salary-calculator-modelV2';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';

/*  
  declartions : => components, pipes, directives
  providers   : => services
  imports     : => module level dependencies
  bootstrap   : => top level components
*/

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    Calculator1Component,
    Calculator2Component,
    ProductsComponent,
    SalaryCalculatorComponent,
    CalculatorResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    /* { provide : SalaryCalculatorModel, useClass : SalaryCalculatorModelV2} */
    SalaryCalculatorModel // => shortcut for { provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
