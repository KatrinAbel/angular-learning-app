import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model'; 

export class ShoppinglistService {

//ingredientAdded = new EventEmitter<Ingredient>();
ingredientsChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();

private ingredients: Ingredient[] = [
  new Ingredient('Feta', 1),
  new Ingredient('Sundried Tomatoes', 5)
];

getIngredient(index: number) {
  return this.ingredients[index];
}

getIngredients() {
  return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient) {
  this.ingredients.push(ingredient)
  this.ingredientsChanged.next(this.ingredients.slice());
}

// new function necessary to add multiple ingredients at once
addIngredients(ingredients: Ingredient[]) {
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
}

updateIngredient(index: number, newIngredient: Ingredient) {
  this.ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());
}

deleteIngredient(index: number) {
  this.ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.ingredients.slice());
}
  
}