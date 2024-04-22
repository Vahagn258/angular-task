import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@services/auth.service";
import { LoadingService } from "@services/loading.service";
import { Observable, catchError, finalize, of, tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,
              private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.load(true);
    const currentToken = this.authService.currentToken;

    if (currentToken) {
      request = request.clone({
        setHeaders: {
          Authorization: currentToken
        }
      });
    }


    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.body.token) {
            this.authService.currentToken = event.body.token;
          }
        }),
        finalize(() => {
          // loading imitation
          setTimeout(() => {
            this.loadingService.load(false)
          }, 1000);
        })
      );
  }
}
