import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];
 
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // alternative method instead of defining navigation via routerLink
  // routerLink="/recipes/new"
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
