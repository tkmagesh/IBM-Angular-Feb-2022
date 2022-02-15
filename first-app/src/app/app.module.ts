import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { ProductsComponent } from './products/products.component';

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
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
