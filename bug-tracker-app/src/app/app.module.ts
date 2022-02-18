import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugEditComponent } from './bugs/views/bugEdit.component';
import { BugStatsComponent } from './bugs/views/bugStats.component';
import { UtilsModule } from './utils/utils.module';
import { BugDetailsComponent } from './bugs/views/bug-details.component';
import { NotFoundComponent } from './not-found.component';
import { LoggedInGuard } from './auth/loggedInGuard';
import { LoginComponent } from './auth/login.component';

let routes : Routes = [
  {path : '', redirectTo:'/bugs', pathMatch:'full'},
  {path : 'bugs', component : BugsComponent, canActivate : [LoggedInGuard] },
  {path : 'add', component : BugEditComponent},
  {path : 'details/:id', component : BugDetailsComponent},
  {path : 'login', component : LoginComponent},
  {path : '**', component : NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide : 'STORAGE', useValue : window.localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
