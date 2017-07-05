import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import { Stats } from 'app/user-stats/models/stats';

const USER_STATS_URL : string = 'http://localhost:16209/api/Stats'

@Injectable()
export class UserStatsService {
    constructor(private http: Http){}

    getByTipsterAndMonth(month: number, user: string): Observable<Stats[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('p_tipster_name', user);
        params.set('p_stats_month', month.toString());
        params.set('p_stats_year', '2017')

        let headers = new Headers({ 'Content-Type': 'application/json' });

        let requestOptions = new RequestOptions();
        requestOptions.search = params;
        requestOptions.headers = headers;
        return this.http
            .get(`${USER_STATS_URL}/GetStatsByMonthTipster`, requestOptions)
            .map((response : Response) => response.json());
    }
}