import { Injectable, Input } from '@angular/core';
import {Headers, Http} from '@angular/http';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';


@Injectable(
    {providedIn: 'root'},
)
export class AuthService {

    private baseUrl = 'http://localhost:8080/api/';
    private httpOptions: any;

    constructor(private http: HttpClient, private _cookieService: CookieService) {
        let csrf = this._cookieService.get('csrftoken');
        // the Angular HttpHeaders class throws an exception if any of the values are undefined
        if (typeof(csrf) === 'undefined') {
          csrf = '';
        }

        this.httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': csrf })
        };
    }

    registerClient(client): Observable<any> {
        const url = this.baseUrl + 'register';
        return this.http.post(url, JSON.stringify(client), this.httpOptions);
    }

    login(username, password): Observable<any> {
        const url = this.baseUrl + 'login';
        return this.http.post(url, {username, password}, this.httpOptions) ;
    }

    logout(): Observable<any> {
        const url = this.baseUrl + 'logout';
        return this.http.post(url, {}, this.httpOptions);
    }
}
