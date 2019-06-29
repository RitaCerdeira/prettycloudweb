import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Salon} from '../models/salon';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SalonsService {

    private baseUrl = 'http://localhost:8080/api/';
    private httpOptions: any;

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
    }

    getAllSalons() {
        const url = this.baseUrl + 'salons';
        return this.http.get< Salon[]>(url);
    }

    getSalonDetails(id: number): Observable<any> {
        const url = this.baseUrl + 'salons/' + id;
        return this.http.get(url, this.httpOptions);
    }
}
