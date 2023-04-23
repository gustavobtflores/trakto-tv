import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private _router: Router) {}

  login(user: { email: string; password: string }) {
    console.log(user);
    this._router.navigate(['/platform/home']);
  }
}
