import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
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

  getSpecialities(): Observable<any> {
    const url = this.baseUrl + 'specialities';
    return this.http.get(url, this.httpOptions);
  }

}
