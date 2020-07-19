import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const index: string = params['id'];
        if (index) {
          this.id = Number(index);
          this.recipeService.getRecipeByIndex(this.id)
            .subscribe(
              recipe => {
                this.recipe = recipe;
              }
            );
        }
      }
    );
  }

  addIngredientsToShoppingList(): void {
    this.recipeService.onShoppingItemsAdded(this.recipe.ingredients);
  }

  navigateToEdit(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
