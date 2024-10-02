import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { Recipe } from '../../types/Recipe';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('recipes').subscribe(x => {
      this.recipes = (x as any).map(x => {
        const decoder = new TextDecoder();
        const arr = new Uint8Array(x.image.data)
        x.image = decoder.decode(arr);

        return x;
      });
      console.log(x)

    })
  }
}
