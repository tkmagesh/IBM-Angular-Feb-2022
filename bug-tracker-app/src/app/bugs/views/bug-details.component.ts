import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bug } from '../models/bug';
import { BugOperationsService } from '../services/bugOperations.service';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
})
export class BugDetailsComponent implements OnInit {

  bug : Bug = {
    id: 0,
    name: '',
    createdAt: new Date(),
    isClosed: false
  }

  constructor(private bugOperations : BugOperationsService, private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.bugOperations
        .getById(id).subscribe(bug => this.bug = bug);
    });
  }

}
