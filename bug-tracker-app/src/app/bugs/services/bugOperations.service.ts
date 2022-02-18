import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";
import { BugApiService } from "./bugApi.service";
/* import { BugStorageService } from "./bugStorage.service"; */


@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    //using bugApi service

    bugs : Bug[] = [];

    constructor(private bugApi : BugApiService){

    }
    createNew(newBugName : string) {
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugApi
            .save(newBug)
            .subscribe(newBug => this.bugs = [...this.bugs, newBug])
    }

    toggle(bugToToggle : Bug) {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
        this.bugApi
            .save(toggledBug)
            .subscribe(toggledBug => {
                this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
            })
    }

    remove(bugToRemove : Bug){
        this.bugApi
            .remove(bugToRemove)
            .subscribe(() => {
                this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
            })
    }

    getAll()  {
        //return this.bugApi.getAll();
        this.bugApi
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

    removeClosed(){
        this.bugs
        .filter(bug => bug.isClosed)
        .forEach((closedBug) => {
            this.remove(closedBug);
        })
    }

    //using bugStorage Service
    /* constructor(private bugStorage : BugStorageService){

    }
    createNew(newBugName : string) : Bug {
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugStorage.save(newBug);
        return newBug;
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
        this.bugStorage.save(toggledBug)
        return toggledBug;
    }

    remove(bugToRemove : Bug){
        this.bugStorage.remove(bugToRemove)
    }

    getAll() : Bug[] {
        return this.bugStorage.getAll();
    } */
}