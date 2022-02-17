import { Inject, Injectable } from "@angular/core";
import { Bug } from "../models/bug";

@Injectable({
    providedIn : 'root'
})
export class BugStorageService{

    
    private _currentBugId : number = 0;
    private keySlug = 'bug';

    constructor(@Inject('STORAGE') private _storage : Storage){

    }
    private getStorageKey(bug : Bug) : string {
        return `${this.keySlug}-${bug.id}`;
    }

    private isBugKey(key : string) :boolean{
        return key.startsWith(this.keySlug);
    }

    save(bugData : Bug){
        if (bugData.id === 0) { //new bug
            bugData.id = ++this._currentBugId;
        }
        this._storage.setItem(this.getStorageKey(bugData), JSON.stringify(bugData))
    }

    remove(bug : Bug){
        this._storage.removeItem(this.getStorageKey(bug));
    }

    getAll() : Bug[] {
        let result : Bug[] = [];
        for (let idx = 0; idx < this._storage.length; idx++){
            let key = this._storage.key(idx);
            if (key && this.isBugKey(key)){
                let rawData = this._storage.getItem(key)
                if (rawData) {
                    const bug = JSON.parse(rawData);
                    this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id;
                    result.push(bug)
                }
            }
        }
        return result;
    }

}