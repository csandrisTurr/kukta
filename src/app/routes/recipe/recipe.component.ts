import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  constructor(private route: ActivatedRoute) {}
}
