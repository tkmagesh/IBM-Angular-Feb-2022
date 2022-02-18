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

  bugs : Bug[] = [];

  bugSortAttr : string = '';
  bugSortDesc : boolean = false;

  constructor(
    private bugOperations : BugOperationsService) {

     }

  ngOnInit(): void {
    this
      .bugOperations
      .getAll()
      .subscribe(bugs => this.bugs = bugs);
    
  }

  onNewBugCreated(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
  }

  onRemoveClick(bugToRemove : Bug){
    this
      .bugOperations
      .remove(bugToRemove)
      .subscribe(() => {
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
      })
    
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations
      .toggle(bugToToggle)
      .subscribe(toggledBug => {
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
      });
    
  }

  onRemoveClosedClick(){
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach((closedBug) => {
        this.onRemoveClick(closedBug);
      })
  }

 
}
