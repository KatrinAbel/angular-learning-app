import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
// Not necessary anmore after navigation was added
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  // Not necessary anymore since navigation now happens via routing with parameters
  // onSelected() {
  //   console.log('here')
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
