import { Component, Input, inject } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [IconComponent],
  providers: [Router],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent {
  @Input() route: string = '/';
  @Input() icon: string = 'question_mark';
  @Input() label?: string;

  constructor(private readonly router: Router) {};

  click(name: string) {
    this.router.navigate([name]);
  }
}
