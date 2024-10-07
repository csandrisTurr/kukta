import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { Router, RouterLink } from '@angular/router';
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
  constructor(
    readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    location.reload();
  }
}
