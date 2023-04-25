import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  isLoading = false;

  constructor(
    private authService: AuthService,
    private _router: Router,
    private toastr: ToastrService,
    private storageService: StorageService
  ) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.isLoading = false;
    }
  }

  ngOnInit() {
    if (this.storageService.isLogged()) {
      this._router.navigate(['/platform/home']);
    }
  }

  async signIn(e: Event) {
    e.preventDefault();
    this.isLoading = true;

    this.authService
      .login({
        email: this.user.email,
        password: this.user.password,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.isLoading = false;
            this.toastr.error('Email ou senha incorretos', '', {
              progressBar: true,
            });
          }

          return throwError(() => new Error(error.error.message));
        })
      )
      .subscribe((res) => {
        const user = {
          avatar: res.logo.url.raw.url,
        };

        this.storageService.setAccessToken(res['access_token']);
        this.storageService.setUser(user);
        this._router.navigate(['/platform/home']);
      });
  }
}
