import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs/operators';

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

  retrieveRecipes() {
    this.httpClient.get<Recipe[]>(this.url)
      .pipe(
        map(
          array => {
            array.filter(recipe => recipe !== null);
            array.map(recipe => recipe.ingredients ? recipe : { ...recipe, ingredients: []});
            return array;
          })
      )
      .subscribe(
      response => {
        this.recipeService.setRecipes(response);
      });
  }

}
