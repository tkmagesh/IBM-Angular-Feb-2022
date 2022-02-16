import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Bug[] = [];

  //TOBE: Fixed
  private _currentBugId : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(newBugName : string){
    const newBug : Bug = {
      id : ++this._currentBugId,
      name : newBugName,
      isClosed : false,
      createdAt : new Date()
    }
    this.bugs.push(newBug)
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
  }

  onBugNameClick(bugToToggle : Bug){
    bugToToggle.isClosed = !bugToToggle.isClosed;
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

    this.bugs = this.bugs.filter(bug => !bug.isClosed);

  }

  /* TOBE : Fixed  */
  getClosedCount() : number {
    /* Approach-1 */
    /* 
    let closedCount = 0;
    for (let bug of this.bugs){
      if (bug.isClosed)
        ++closedCount
    }
    return closedCount 
    */

    /* Approach-2 */
    /* return this.bugs.filter(bug => bug.isClosed).length */
    
    /* Approach-3 */
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }
}
