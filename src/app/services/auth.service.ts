import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private _router: Router) {}

  login(user: { email: string; password: string }) {
    this.http
      .post('https://api.trakto.io/auth/signin', JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      })
      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res['access_token'];
        this._router.navigate(['/platform/home']);
      });
  }
}
