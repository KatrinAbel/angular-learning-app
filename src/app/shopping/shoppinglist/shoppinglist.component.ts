import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})

export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  igChangeSubscription: Subscription;

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.igChangeSubscription = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients;}
    )
  }

  onEditItem(index: number) {
    this.shoppinglistService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChangeSubscription.unsubscribe();
  }

}
