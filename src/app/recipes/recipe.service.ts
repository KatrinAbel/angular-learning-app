import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping/shoppinglist/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // Instead of defining Output in the individual components the Event is centralised here
  // Since the service is instantiated in the high level component recipes, the same instance
  // of this service is available to all child components

  recipeChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Zuchini', 1), 
        new Ingredient('Kürbis', 3)
      ]
      ),
    new Recipe(
      'Another Test Recipe', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Zuchini', 1),
        new Ingredient('Kürbis', 3)
      ]
      )
  ];

  constructor(private shoppinglistService: ShoppinglistService) {}

  getRecipes() {
    // create copy of recipe object - if just this.recipes is returned we would directly
    // alter the reference object, so the actual value. By calling splice it is ensured
    // that the original array really cant be accessed and altered from outside
    return this.recipes.slice();
  }

  getReceipe(index: number) {
    return this.recipes[index];
  }

  addIngredientstoShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients)
  }

  addReceipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    console.log(this.recipes)
    this.recipeChanged.next(this.recipes.slice());
  }
 
} 