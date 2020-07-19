import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingItemAddedEvent = new Subject<Ingredient[]>();
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
    this.shoppingItemAddedEvent.next(this.ingredients.slice());
  }

  onShoppingItemsAdded(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.shoppingItemAddedEvent.next(this.ingredients.slice());
  }
}
