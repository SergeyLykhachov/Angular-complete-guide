import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  subject = new Subject<any>();

  private recipes: Recipe[] = [
    {
      name: 'Test Name 1',
      description: 'Test Recipe1',
      imagePath: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
      ingredients: [
        new Ingredient('potato', 1),
        new Ingredient('cheese', 1),
        new Ingredient('tomato', 1)
      ]
    },
    {
      name: 'Test Name 2',
      description: 'Test Recipe2',
      imagePath: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
      ingredients: [
        new Ingredient('cheese', 1),
        new Ingredient('egg', 2),
        new Ingredient('potato', 1)
      ]
    },
    {
      name: 'Test Name 3',
      description: 'Test Recipe3',
      imagePath: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
      ingredients: [
        new Ingredient('eggplant', 1),
        new Ingredient('potato', 1),
        new Ingredient('tomato', 1)
      ]
    },
    {
      name: 'Test Name 4',
      description: 'Test Recipe4',
      imagePath: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
      ingredients: [
        new Ingredient('tomato', 1),
        new Ingredient('corn', 2),
        new Ingredient('cheese', 1)
      ]
    }
  ];


  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.subject.next(this.recipes.slice());
  }

  getRecipeSubject(): Observable<Recipe[]> {
    return this.subject.asObservable();
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.subject.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.subject.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.subject.next(this.recipes.slice());
  }

  getRecipe(index: number): Observable<Recipe> {
    return of(this.recipes[index]);
  }

}
