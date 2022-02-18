import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugEditComponent } from './bugs/views/bugEdit.component';
import { BugStatsComponent } from './bugs/views/bugStats.component';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [
    {provide : 'STORAGE', useValue : window.localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
