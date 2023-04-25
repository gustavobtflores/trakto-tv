import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

const USER_KEY = '@TraktoTv:user';
const ACCESS_KEY = '@TraktoTv:accessToken';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService) {}

  public setUser(user: any): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): void {
    localStorage.getItem(USER_KEY);
  }

  public setAccessToken(token: string) {
    this.cookieService.set(ACCESS_KEY, token);
  }

  public getAccessToken(): string {
    return this.cookieService.get(ACCESS_KEY);
  }

  public isLogged(): boolean {
    return localStorage.getItem(USER_KEY) !== null;
  }
}
