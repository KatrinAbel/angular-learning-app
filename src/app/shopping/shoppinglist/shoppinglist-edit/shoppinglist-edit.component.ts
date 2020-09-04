import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit, OnDestroy {
  // Used before form was introduced
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmitForm(form: NgForm) {
    console.log(form)
    const name = form.value.name
    const amount = form.value.amount;
    const newIngredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shoppinglistService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppinglistService.addIngredient(newIngredient); 
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
