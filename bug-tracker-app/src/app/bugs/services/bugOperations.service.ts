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
    constructor(private bugApi : BugApiService){

    }
    createNew(newBugName : string) : Observable<Bug> {
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        return this.bugApi.save(newBug);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
        return this.bugApi.save(toggledBug);
    }

    remove(bugToRemove : Bug) : Observable<void>{
        return this.bugApi.remove(bugToRemove)
    }

    getAll() : Observable<Bug[]> {
        //return this.bugApi.getAll();
        return this.bugApi.getAllOpen()
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