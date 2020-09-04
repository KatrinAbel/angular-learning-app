import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
// import { ShoppinglistService } from 'src/app/shopping/shoppinglist/shoppinglist.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
})

export class RecipedetailComponent implements OnInit {
  //@Input() recipe: Recipe;
  recipe: Recipe;
  id: number; 

  // constructor(private shoppinglistService: ShoppinglistService) { }
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        // Place here so it is called everytime the id changes
        this.recipe = this.recipeService.getReceipe(this.id);
      }
    )
  }

  onAddShoppingList(ingredients: Ingredient[]) {
    // Two options: either work with shoppinglistService, then below implementation is possible
    // But since we are in the receipe section it is logical to work with Receipe Service
    // Then an extra step is needed
    // ingredients.forEach(ingredient => this.shoppinglistService.addIngredient(ingredient));
    this.recipeService.addIngredientstoShoppingList(ingredients);
  }

  // Alternative approach to defining navigation via routerlink
  // [routerLink]="['edit']"
  onEditReceipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // more complex alternative using the id - for that moving up one level and then 
    // attaching the additional parameters of the path
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
