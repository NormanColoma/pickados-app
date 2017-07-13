import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from "app/user-dashboard/models/post.interface";

const API_URL : string = 'http://localhost:16209/api/Tipster'

@Injectable()
export class UserDashboardService {

     constructor(private http: Http){}

     loadTimeline(tipsterId : number) : Observable<Post[]>{
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         const TIMELINE_URL = `${API_URL}/timeline?id=${tipsterId}`;
         
         return this.http
            .get(TIMELINE_URL, options)
            .map((response : Response) => response.json())  
     }
}