import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICountryCode, IObject, IResponse } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {

  constructor(override readonly http: HttpClient) {
    super(http);
  }

  getCountryCodes(): Observable<ICountryCode[]> {
    return this.get<IResponse<ICountryCode[]>>('GetCountryCode')
      .pipe(
        map(res => res.result)
      );
  }

  checkPhone(body: IObject) {
    return this.post('checkPhone', body);
  }

  login(body: IObject) {
    return this.post('login', body);
  }

  get currentToken(): string {
    return localStorage.getItem('token') || '';
  }

  set currentToken(value: string | null) {
    if (!value) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', value);
    }
  }
}
