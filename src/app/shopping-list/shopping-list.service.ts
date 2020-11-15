import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingItemAddedEvent = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients = new Array<Ingredient>(
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  );
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingItemAddedEvent.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.shoppingItemAddedEvent.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.shoppingItemAddedEvent.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.shoppingItemAddedEvent.next(this.ingredients.slice());
  }

}
