import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class BugsComponent implements OnInit {

  counter : number = 0;

  

  bugSortAttr : string = '';
  bugSortDesc : boolean = false;

  constructor(
    public bugOperations : BugOperationsService) {

     }

  ngOnInit(): void {
    this
      .bugOperations
      .getAll();
  }

  onRemoveClick(bugToRemove : Bug){
    this
      .bugOperations
      .remove(bugToRemove)
      
    
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations
      .toggle(bugToToggle);
  }

  onRemoveClosedClick(){
    this.bugOperations
      .removeClosed()
  }

 
}
