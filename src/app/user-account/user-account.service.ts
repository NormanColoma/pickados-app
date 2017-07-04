import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

//Rxjs library
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//Components and models
import { UserAccountCredentials } from "app/user-account/models/user-account-credentials.interface";
import { UserAccount } from "app/user-account/models/user-account.interface";


const TIPSTER_URL : string = 'http://localhost:16209/api/Tipster'

@Injectable()
export class UserAccountService {

    private isLoggedIn = false;
    private loggedInUser: UserAccount;

    constructor(private http: Http){}

    login(account: UserAccountCredentials): Observable<UserAccount>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(`${TIPSTER_URL}/Login`, account, options)
            .map((response : Response) => {
                this.isLoggedIn = true;
                this.loggedInUser = response.json();
                debugger;
                return response.json()
            })
            .catch((error: Response) => {
                 console.error(error);
                 return Observable.throw(error);
            });
    }
}