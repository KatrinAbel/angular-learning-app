import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
 
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  // alternative method instead of defining navigation via routerLink
  // routerLink="/recipes/new"
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    // important to store the subscription in a variable and not unsubscribe from the 
    // subject itself! Otherwise when navigating between components there will be an error
    // object unsubscribed
    this.subscription.unsubscribe();
  }
}
