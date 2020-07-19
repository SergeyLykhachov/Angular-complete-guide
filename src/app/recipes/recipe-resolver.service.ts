import { Recipe } from './recipe.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export class RecipeResolver implements Resolve<Recipe> {
  recipe: Recipe;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return of(this.recipe);
  }

}
