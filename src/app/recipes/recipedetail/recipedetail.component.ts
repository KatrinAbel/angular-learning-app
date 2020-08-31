import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
})

export class RecipedetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
