import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }): Observable<User> {
    return this.http.post<User>(
      'https://api.trakto.io/auth/signin',
      JSON.stringify(user),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      }
    );
  }
}
