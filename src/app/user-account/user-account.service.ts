import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

//Rxjs library
import { Observable } from "rxjs/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

//Components and models
import { UserAccountCredentials } from "app/user-account/models/user-account-credentials.interface";
import { UserAccount } from "app/user-account/models/user-account.interface";
import { Router } from "@angular/router";


const API_URL : string = 'http://localhost:16209/api/Tipster'

@Injectable()
export class UserAccountService {
    
    private redirectUrl: string = '/home';
    
    private loggedInSource = new BehaviorSubject<boolean>(this.isLoggedIn());
    public userLoggedIn$ = this.loggedInSource.asObservable();

    constructor(private http: Http, private router: Router){}

    login(account: UserAccountCredentials): Observable<boolean>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(`${API_URL}/Login`, account, options)
            .map((response : Response) => {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('loggedInUser', JSON.stringify(response.json()));
                this.loggedInSource.next(true);
                return Observable.of(true);
            })
            .catch((error: Response) => {
                 return Observable.throw(error);
            });
    }

    isLoggedIn(){
        if(localStorage.getItem('loggedIn')){
             return true;
        }
        return false;
    }

    setRedirectUrl(url: string) {
        this.redirectUrl = url;
    }

    redirectAfterLogin(){
        this.router.navigate([this.redirectUrl]);
    }

    logOut() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['/account/login']);
    }
}