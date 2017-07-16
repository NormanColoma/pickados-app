import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Tipster } from 'app/tipsters/models/tipster';

const TIPSTER_URL : string = 'http://localhost:16209/api/Tipster'
const TIPSTER_STATS_URL : string = 'http://localhost:16209/api/TipsterStats'

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

    getAll(): Observable<any[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get(`${TIPSTER_STATS_URL}/GetAll`, options)
            .map((response : Response) => response.json());
    }
}