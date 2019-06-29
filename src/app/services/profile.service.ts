import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://pedrodlmatos.pythonanywhere.com/api/';
  private httpOptions: any;

  constructor(private http: HttpClient, private _cookieService:CookieService) {
      let csrf = this._cookieService.get("csrftoken");
      // the Angular HttpHeaders class throws an exception if any of the values are undefined
      if (typeof(csrf) === 'undefined') {
        csrf = '';
      }

      this.httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': csrf })
      };
  }

  getUser(): Observable<any> {
    const url = this.baseUrl + 'user/'+window.localStorage.getItem('user');
    return this.http.get(url, this.httpOptions);
  }

  getDoctor(): Observable<any> {
    const url = this.baseUrl + 'doctor/'+window.localStorage.getItem('user');
    return this.http.get(url, this.httpOptions);
  }

  getNurse(): Observable<any> {
    const url = this.baseUrl + 'nurse/'+window.localStorage.getItem('user');
    return this.http.get(url, this.httpOptions);
  }

  getPatient(): Observable<any> {
    const url = this.baseUrl + 'patient/'+window.localStorage.getItem('user');
    return this.http.get(url, this.httpOptions);
  }

  getSpeciality(id:UUID): Observable<any> {
    const url = this.baseUrl + 'speciality/'+id;
    return this.http.get(url, this.httpOptions);
  }

  getSpecialities(): Observable<any> {
    const url = this.baseUrl + 'specialities';
    return this.http.get(url, this.httpOptions);
  }

}

