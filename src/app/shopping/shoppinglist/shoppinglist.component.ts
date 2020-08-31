import { Component, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Feta', 1),
    new Ingredient('Sundried Tomatoes', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded (ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
