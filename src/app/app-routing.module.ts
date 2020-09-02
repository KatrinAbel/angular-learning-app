import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    // important that new is before :id, otherwise new will be interpreted as an dynamic id
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipedetailComponent},
    { path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: 'shopping-list', component: ShoppinglistComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouterModule {};