import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  // Instead of defining Output in the individual components the Event is centralised here
  // Since the service is instantiated in the high level component recipes, the same instance
  // of this service is available to all child components
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
    // create copy of recipe object - if just this.recipes is returned we would directly
    // alter the reference object, so the actual value. By calling splice it is ensured
    // that the original array really cant be accessed and altered from outside
    return this.recipes.slice();
  }

} 