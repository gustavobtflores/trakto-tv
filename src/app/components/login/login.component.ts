import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private _router: Router,
    private toastr: ToastrService,
    private storageService: StorageService,
    private formBuilder: FormBuilder
  ) {}

  get formControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async signIn(e: Event) {
    e.preventDefault();
    if (this.loginForm.invalid) {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        const user: User = {
          name: res['firstname'],
          avatar: res['logo']['url']['raw']['url'],
        };

        this.storageService.setAccessToken(res['access_token']);
        this.storageService.setUser(user);
        this._router.navigate(['/platform/home']);
      },
      error: (err) => {
        if (err.status === 401) {
          this.isLoading = false;
          this.toastr.error('Email ou senha incorretos', '', {
            progressBar: true,
          });
        }

        this.toastr.error(err.error.message, '', {
          progressBar: true,
        });
      },
    });
  }
}
