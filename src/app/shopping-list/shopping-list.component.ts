import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  shoppingItemAddedEventSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingItemAddedEventSubscription = this.shoppingListService.shoppingItemAddedEvent.subscribe(
      ingredients => this.ingredients = ingredients
    );
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy(): void {
    this.shoppingItemAddedEventSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
