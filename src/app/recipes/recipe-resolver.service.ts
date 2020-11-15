import { Recipe } from './recipe.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Injectable } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return this.recipeService.getRecipes().length === 0
      ? this.dataStorageService.retrieveRecipes()
      : this.recipeService.getRecipes();
  }

}
