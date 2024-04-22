import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, forkJoin, map } from 'rxjs';
import { IAdditionalData, IAllData, IBankAccount, IResponse, IUserData } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SystemService extends HttpService {

  constructor(override readonly http: HttpClient) {
    super(http);
  }

  getUserData(): Observable<IUserData | null> {
    return this.get<IResponse<IUserData | null>>('getUserData')
      .pipe(
        map(result => result.result),
        catchError(this.handleError)
      );
  }

  getBankAccounts(): Observable<IBankAccount[] | null> {
    return this.get<IResponse<IBankAccount[] | null>>('getBankAccounts')
      .pipe(
        map(result => result.result),
        catchError(this.handleError)
      );
  }

  getAdditionalData(): Observable<IAdditionalData | null> {
    return this.get<IResponse<IAdditionalData | null>>('getAdditionalData')
      .pipe(
        map(result => result.result),
        catchError(this.handleError)
      );
  }

  getTransactions(): Observable<any> {
    return this.get<IResponse<any>>('getTransactions')
      .pipe(
        map(result => result.result),
        catchError(this.handleError)
      );
  }

  getAllData(): Observable<IAllData> {
    return forkJoin({
      userData: this.getUserData(),
      bankAccounts: this.getBankAccounts(),
      additionalData: this.getAdditionalData(),
      transactions: this.getTransactions()
    });
  }

}
