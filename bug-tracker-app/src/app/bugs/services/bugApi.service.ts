import { Inject, Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn : 'root'
})
export class BugApiService{
      
    serviceEndPoint : string = environment.serviceEndPoint;

    constructor(private http : HttpClient){

    }
   

    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0) { //new bug
            return this.http.post<Bug>(this.serviceEndPoint, bugData)
        } else {
            return this.http.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData)
        }
    }

    remove(bug : Bug) : Observable<void>{
        return this.http.delete<void>(`${this.serviceEndPoint}/${bug.id}`)
    }

    getAll() : Observable<Bug[]> {
        return this.http.get<Bug[]>(this.serviceEndPoint)
    }

    getAllOpen() : Observable<Bug[]> {
        return this.http
            .get<Bug[]>(this.serviceEndPoint)
            .pipe(map(bugs => bugs.filter(bug => !bug.isClosed)))
    }

    getById(id : number) : Observable<Bug>{
        return this.http.get<Bug>(`${this.serviceEndPoint}/${id}`)
    }

}