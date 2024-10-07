import { Component, OnInit, StaticClassSansProvider } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../../types/User';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Stats } from '../../types/Stats';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ButtonComponent, LoaderComponent, IconComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[];
  stats: Stats;

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    this.httpClient.get('users').subscribe(x => {
      this.users = x as User[];
    });

    this.httpClient.get('stats').subscribe(x => {
      this.stats = x as Stats;
    });
  }

  editUser(id: string) {
    this.httpClient.patch(`users/${id}`, {
      name: (document.getElementById(`${id}-name`) as any).value,
      email: (document.getElementById(`${id}-email`) as any).value,
      role: (document.getElementById(`${id}-role`) as any).value,
      phone: (document.getElementById(`${id}-phone`) as any).value,
      banned: (document.getElementById(`${id}-banned`) as any).value == 'off' ? true : false,
    }).subscribe(x => alert(x));
  }

  deleteUser(id: string) {
    this.httpClient.delete(`users/${id}`);
  }
}
