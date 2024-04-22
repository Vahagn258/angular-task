import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICountryCode, IObject, IResponse } from 'app/interfaces';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {

  isBrowser: boolean = true;

  constructor(override readonly http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    super(http);
    this.isBrowser = isPlatformBrowser(platformId);
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
    return this.isBrowser ? (localStorage?.getItem('token') || '') : '';
  }

  set currentToken(value: string | null) {
    if (this.isBrowser) {
      if (!value) {
        localStorage?.removeItem('token');
      } else {
        localStorage?.setItem('token', value);
      }
    }
  }
}
