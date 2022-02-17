import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  counter : number = 0;

  bugs : Bug[] = [];

  bugSortAttr : string = '';
  bugSortDesc : boolean = false;

  constructor(private bugOperations : BugOperationsService) { }

  ngOnInit(): void {
    this.bugs = this.bugOperations.getAll();
  }

  onAddNewClick(newBugName : string){
    const newBug = this.bugOperations.createNew(newBugName);
    
    //mutation
    //this.bugs.push(newBug);

    //immutable
    this.bugs = [...this.bugs, newBug];
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugOperations.remove(bugToRemove);
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
  }

  onBugNameClick(bugToToggle : Bug){
    const toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
  }

  onRemoveClosedClick(){
    /* approach-1 */
    /* 
    for (let idx = this.bugs.length-1; idx >=0; idx--){
      let bug = this.bugs[idx];
      if (bug.isClosed){
        this.bugs.splice(idx, 1)
      }
    } 
    */

    /* approach-2 */
    /* 
    this.bugs = this.bugs.filter(function(bug){
      return !bug.isClosed;
    }); 
    */

    
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach((closedBug) => {
        this.bugOperations.remove(closedBug);
      })
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

 
}
