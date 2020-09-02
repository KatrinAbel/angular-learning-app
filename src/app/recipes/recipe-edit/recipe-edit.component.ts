import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  receipe: Recipe;
  id: number;
  editMode: boolean = false; 

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router   ) {            
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; 
        if (this.editMode) {
          this.recipeService.getReceipe(this.id);
        }
      }
    )
  }

}
