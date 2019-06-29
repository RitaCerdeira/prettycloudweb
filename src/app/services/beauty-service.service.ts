import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BeautyServiceService {

    private baseUrl = 'http://localhost:8080/api/';
    private httpOptions: any;

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
    }

    getServices(): Observable<any> {
        const url = this.baseUrl + 'services';
        return this.http.get(url, this.httpOptions);
    }

    getSalons(id: number): Observable<any> {
        const url = this.baseUrl + 'services/1/salons';
        return this.http.get(url, this.httpOptions);
    }
}
