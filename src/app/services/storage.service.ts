import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const USER_KEY = '@TraktoTv:user';
const ACCESS_KEY = 'accessToken';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService) {}

  public setUser(user: any): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    const user = localStorage.getItem(USER_KEY);

    if (user) return JSON.parse(user);

    return null;
  }

  public setAccessToken(token: string) {
    const expireTime = new Date(new Date().getTime() + 1000 * 60 * 15); // 15 minutes

    this.cookieService.set(ACCESS_KEY, token, {
      sameSite: 'None',
      secure: true,
      expires: expireTime,
    });
  }

  public getAccessToken(): string {
    return this.cookieService.get(ACCESS_KEY);
  }

  public isLogged(): boolean {
    return this.cookieService.check(ACCESS_KEY);
  }
}
