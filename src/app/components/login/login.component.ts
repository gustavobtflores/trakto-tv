import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService) {}

  signIn(e: Event) {
    e.preventDefault();

    this.authService.login({
      email: this.user.email,
      password: this.user.password,
    });
  }
}
