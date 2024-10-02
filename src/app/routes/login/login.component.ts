import { Component } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../modules/auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  jwt$: Observable<string>;

  email = new FormControl('');
  password = new FormControl('');

  constructor(private readonly authService: AuthService, private readonly authStore: Store<{ jwt: string }>) {
    this.jwt$ = authStore.select('jwt');
  }

  login() {
    this.authService.login({ email: this.email.value, password: this.password.value });
  }
}
