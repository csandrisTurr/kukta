import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../modules/auth/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { logout } from '../../modules/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent, NavbarItemComponent, RouterLink, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(readonly authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
