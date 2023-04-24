import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static accessToken = '';

  constructor(private cookieService: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    AuthInterceptor.accessToken = this.cookieService.get('accessToken');

    if (AuthInterceptor.accessToken === '') {
      return next.handle(request);
    }

    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthInterceptor.accessToken}`,
      },
    });

    return next.handle(req);
  }
}
