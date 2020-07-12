import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelectedEvent = new EventEmitter<Recipe>();

  private recipes = new Array<Recipe>(
    new Recipe(
      'Test Name 1',
      'Test Recipe1',
      'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
    [
      new Ingredient('potato', 1),
      new Ingredient('cheese', 1),
      new Ingredient('tomato', 1)
    ]
    ),
      new Recipe(
      'Test Name 2',
      'Test Recipe2',
      'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
      [
        new Ingredient('cheese', 1),
        new Ingredient('egg', 2),
        new Ingredient('potato', 1)
      ]
    ),
      new Recipe(
      'Test Name 3',
      'Test Recipe3',
      'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
      [
        new Ingredient('eggplant', 1),
        new Ingredient('potato', 1),
        new Ingredient('tomato', 1)
      ]
    ),
      new Recipe(
      'Test Name 4',
      'Test Recipe4',
      'https://www.afarmgirlsdabbles.com/wp-content/uploads/2018/07/grilled-vegetable-salad_AFarmgirlsDabbles_AFD-4-600x400.jpg',
      [
        new Ingredient('tomato', 1),
        new Ingredient('corn', 2),
        new Ingredient('cheese', 1)
      ]
    )
  );

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }

  onShoppingItemsAdded(ingrerdients: Ingredient[]) {
    this.shoppingListService.onShoppingItemsAdded(ingrerdients);
  }
}
