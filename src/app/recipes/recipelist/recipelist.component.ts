import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];
 
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
