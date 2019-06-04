import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

 @Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {

      }

     login(username: string, password: string) {
         //return this.http.post<any>( mainUrl+'/login', { 
        return this.http.post<any>(`http://cstem.cstep.in/balkushalapptest/loginrchuser`, {       
            userId: username, password: password 
        }
        )
            .pipe(map(user => {
                
                if (user.errorCode == 0) {
                   // console.log(user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.responseObject));
                    localStorage.setItem('UserSession', JSON.stringify(user.sessionId));
                    localStorage.setItem('userId', JSON.stringify( username));
                }

                 return user.errorCode;
            }));
    }

     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('UserSession');

     }
}