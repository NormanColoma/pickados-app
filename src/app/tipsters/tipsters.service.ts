import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Tipster } from 'app/tipsters/models/tipster';

const TIPSTER_URL : string = 'http://localhost:16209/api/Tipster'

@Injectable()
export class TipstersService {
    constructor(private http: Http){}

    getByAlias(alias: string): Observable<Tipster>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get(`${TIPSTER_URL}/FindByUser?alias=` + alias, options)
            .map((response : Response) => response.json());
    }

    getAll(): Observable<Tipster[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get(`${TIPSTER_URL}/all`, options)
            .map((response : Response) => response.json());
    }
}