import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { AuthComponent } from './auth.component/auth.component';
import {RecipeResolver} from './recipes/recipe-resolver.service';
import { AuthGuard } from './auth.component/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    resolve: [RecipeResolver],
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipesStartComponent
      },
      {
        path: 'new',
        component: RecipesEditComponent
      },
      {
        path: ':id/edit',
        component: RecipesEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      }
    ]
  },
  {
    path: 'shopping_list',
    component: ShoppingListComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
