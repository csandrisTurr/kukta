import { Component, OnInit, StaticClassSansProvider } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../../types/User';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Stats } from '../../types/Stats';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ButtonComponent, LoaderComponent],
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

}
