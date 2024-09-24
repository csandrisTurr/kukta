import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent, NavbarItemComponent, RouterLink, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
