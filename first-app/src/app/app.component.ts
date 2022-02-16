import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';

  userChoice : string = '';
  
  constructor(){
   /*  setTimeout(() => {
      this.title = 'My-New-App'
    }, 5000); */
  }
}
