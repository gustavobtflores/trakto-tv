import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserResponse {
  access_token: string;
  logo: {
    url: {
      raw: {
        url: string;
      };
    };
  };
  firstname: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }): Observable<UserResponse> {
    return this.http.post<UserResponse>(
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
