import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { Recipe } from '../../types/Recipe';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';
import { AuthService } from '../../modules/auth/auth.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [IconComponent, RouterLink, LoaderComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    readonly authService: AuthService,
    private readonly httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.httpClient.get('recipes').subscribe(x => {
      this.recipes = (x as any).map(x => {
        const decoder = new TextDecoder();
        const arr = new Uint8Array(x.image.data)
        x.image = decoder.decode(arr);
        if (x.description.length > 100)
          x.description = x.description.slice(0, 100) + '...';

        return x;
      });
      console.log(x)

    }, (x) => alert(x.error.text))
  }

  getCategories(id: number) {
    return []
  }

  deleteRecipe(id: number) {
    this.httpClient.delete(`recipes/${id}`).subscribe(x => console.log(x));
    this.recipes = this.recipes.filter(x => x.id != id);
  }
}
