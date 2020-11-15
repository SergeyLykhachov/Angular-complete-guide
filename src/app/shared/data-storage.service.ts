import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://angular-complete-guide-fff01.firebaseio.com/recipes.json';

  constructor(private recipeService: RecipeService, private httpClient: HttpClient) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put(this.url, recipes).subscribe();
  }

  retrieveRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.url)
      .pipe(
        map(
          array => {
            return array.filter(recipe => recipe !== null)
              .map(recipe => recipe.ingredients ? recipe : { ...recipe, ingredients: []});
        }),
        tap(
          (recipes: Recipe[]) => this.recipeService.setRecipes(recipes)
        )
      );
  }

}
