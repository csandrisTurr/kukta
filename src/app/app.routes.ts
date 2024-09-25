import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { RecipesComponent } from './routes/recipes/recipes.component';
import { RecipeComponent } from './routes/recipe/recipe.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipe/:id', component: RecipeComponent },
];
