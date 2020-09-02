import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model'; 

export class ShoppinglistService {

//ingredientAdded = new EventEmitter<Ingredient>();
ingredientsChanged = new Subject<Ingredient[]>();

private ingredients: Ingredient[] = [
  new Ingredient('Feta', 1),
  new Ingredient('Sundried Tomatoes', 5)
];

getIngredients() {
  console.log('getIngredients')
  return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient) {
  console.log('addIngredient', ingredient)
  this.ingredients.push(ingredient)
  this.ingredientsChanged.next(this.ingredients.slice());
}

// new function necessary to add multiple ingredients at once
addIngredients(ingredients: Ingredient[]) {
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
}
  
}