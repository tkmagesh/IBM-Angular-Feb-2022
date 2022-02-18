import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Bug } from "../models/bug";
import { BugOperationsService } from "../services/bugOperations.service";

@Component({
    selector : 'app-bug-edit',
    template : `
        <div>
             <a [routerLink]="['/bugs']">Show List</a>
        </div>
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" #txtNewBugName>
            <button (click)="onAddNewClick(txtNewBugName.value)">Add New</button>
            
        </section>
    `
})
export class BugEditComponent implements OnInit{

    @Output()
    bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();
    
    ngOnInit(): void {
        
    }

    constructor(
        private bugOperations : BugOperationsService,
        private router : Router
    ){

    }

    onAddNewClick(newBugName : string){
        this.bugOperations
            .createNew(newBugName);
        this.router.navigate(['bugs']);
    }
}