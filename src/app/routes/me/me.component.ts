import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../modules/auth/auth.service';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  
  password = new FormControl('');
  confirmPassword = new FormControl('');

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    this.httpClient.get(`me`).subscribe(x => {
      this.name.setValue(x[0].name);
      this.email.setValue(x[0].email);
      this.phone.setValue(x[0].phone);
    })
  }

  changeData() {
    this.httpClient.patch(`me`, {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
    }).subscribe(x => alert(x));
  }

  changePassword() {

  }
}
