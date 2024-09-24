import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, ButtonComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  phone = new FormControl('');

  register() {

  }
}
