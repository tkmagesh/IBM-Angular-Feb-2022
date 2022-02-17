import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { TrimTextPipe } from './bugs/pipes/trim-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ElapsedPipe,
    SortPipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide : 'STORAGE', useValue : window.localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
