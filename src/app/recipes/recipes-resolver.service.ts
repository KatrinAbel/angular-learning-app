import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor( 
              private dataStorageService: DataStorageService,
              private recipeService: RecipeService
              ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // without checking if we have recipes we would overwrite the changes made locally 
    // as we reload recipes whenever the route is reloaded
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes; 
    }
  }
}