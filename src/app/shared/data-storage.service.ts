import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService
              ) {}
 
  fetchRecipes() {
    return this.http.get<Recipe[]>('https://course-project-13274.firebaseio.com/recipes.json')
    .pipe(
      map(recipes => { return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      })} ),
      // tap goes as a second argument within pipe not chained after! 
      tap(
        recipes => { this.recipeService.setReceipes(recipes) }
      )
    )
    // Since we use a resolver we do not subscribe to the Observable here but rather 
    // in the header component. Instead we use tap() function to set recipes    
    // .subscribe(
    //   recipes => {
    //     console.log(recipes)
    //     this.recipeService.setReceipes(recipes)
    //   }
    // )
  }

  storeRecipes() {
   const recipes =  this.recipeService.getRecipes();
   this.http.put(
      'https://course-project-13274.firebaseio.com/recipes.json', 
      recipes
    ).subscribe(
     response => console.log(response)
   )
  }
}