import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../types/Recipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
  recipe: Recipe<string[]>;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.httpClient.get(`recipes/${this.route.snapshot.params['id']}`).subscribe(x => {
      this.recipe = (x as any).map(x => {
        const decoder = new TextDecoder();
        const arr = new Uint8Array(x.image.data)
        x.image = decoder.decode(arr);

        return x;
      })[0];

      this.httpClient.get(`recipes/${this.route.snapshot.params['id']}/additions`).subscribe(x => {
        this.recipe.additions = (x as any).map(x => x.name);
      }, (x) => alert(x.error.text))
    }, (x) => alert(x.error.text))

  }
}
