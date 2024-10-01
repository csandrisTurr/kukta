import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { AuthService } from '../../modules/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, ButtonComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private readonly authService: AuthService) {}

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  phone = new FormControl('');

  register() {
    this.authService.register({ 
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value,
     });
  }
}
