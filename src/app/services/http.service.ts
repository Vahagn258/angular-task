import { HttpClient } from '@angular/common/http';
import { IObject } from 'app/interfaces';
import { Observable, of } from 'rxjs';

export abstract class HttpService {

  baseUrl = 'http://localhost:3000';

  constructor(protected http: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  post<T>(endpoint: string, body: IObject): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  handleError(error: any): Observable<null> {
    return of(null);
  }
}
