import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { TrimTextPipe } from './bugs/pipes/trim-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
