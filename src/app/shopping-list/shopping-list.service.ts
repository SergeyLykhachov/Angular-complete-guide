import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingItemAddedEvent = new EventEmitter<Ingredient[]>();
  private ingredients = new Array<Ingredient>(
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  );
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  onShoppingItemAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingItemAddedEvent.emit(this.ingredients.slice());
  }

  onShoppingItemsAdded(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    this.shoppingItemAddedEvent.emit(this.ingredients.slice());
  }
}
