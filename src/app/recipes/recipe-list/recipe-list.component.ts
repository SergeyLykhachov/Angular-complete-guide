import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes = new Array<Recipe>(
    new Recipe(
      'Test Name 1',
      'Test Recipe1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Test Name 2',
      'Test Recipe2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Test Name 3',
      'Test Recipe3',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Test Name 4',
      'Test Recipe4',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    )
  );
  constructor() { }

  ngOnInit(): void {
  }

  onItemSelected(recipe: Recipe): void {
    this.selectedRecipe.emit(recipe);
  }

}
