import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* 
import * as angularCore from '@angular/core'
console.log(angularCore) 
*/

/* 
import * as calc from './calculator'
console.log(calc);
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator';
let add = calc.add;
console.log(add(1000,2000)) 
*/

/* 
import * as calc from './calculator';
let { add } = calc;
console.log(add(10000,20000)) 
*/

/* 
import { add } from './calculator';
console.log(add(100000,200000))
*/

//importing the default exported object
/* 
import calcUtils from './calculator'
console.log(calcUtils) 
*/

/* 
import calcUtils, { add } from './calculator'
console.log(add(100,200))
console.log(calcUtils.isEven(101)) 
*/

import calcUtils , * as calc from './calculator'
console.log(calc.add(100,200))
console.log(calcUtils.isEven(101)) 

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
