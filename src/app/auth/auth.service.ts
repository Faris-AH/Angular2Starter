import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {User} from '../models/user';

@Injectable()
export class AuthService {
    constructor(private http:Http) {

    }


    private createUser = 'app/createuser';  // URL to web API

    login() {

    }

    extractData(res:Response) {
        let body = res.json();
        return body.data || {};
    }

    handleError(error:Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        console.log(error);
        let errMsg:string;
        errMsg = error.message || "404 Error";
        return Observable.throw(errMsg);
    }

    signUp(param:any):Observable<User> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.createUser, {param}, options)
            .map(res => {
                console.log(res);
                return res.json().data as User;
            })
            .catch(this.handleError);
   
    }


}
