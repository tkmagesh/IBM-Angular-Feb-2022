import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    
    constructor(private bugStorage : BugStorageService){

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
    }
}