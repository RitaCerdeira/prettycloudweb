import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../models/service';
import {SalonPerService} from '../models/salonPerService';

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
        const url = this.baseUrl + 'services/' + id;
        return this.http.get(url, this.httpOptions);
    }
}
