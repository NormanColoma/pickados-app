import { Injectable } from '@angular/core';
import { UserAccountCredentials } from "app/user-account/models/user-account-credentials.interface";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { UserAccount } from "app/user-account/models/user-account.interface";


const TIPSTER_URL : string = 'http://localhost:16209/api/Tipster'

@Injectable()
export class UserAccountService {
    constructor(private http: Http){}

    login(account: UserAccountCredentials): Observable<UserAccount>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(`${TIPSTER_URL}/Login`, account, options)
            .map((response : Response) => response.json());
    }
}