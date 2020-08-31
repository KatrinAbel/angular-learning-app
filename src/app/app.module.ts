import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { ShoppinglistEditComponent } from './shopping/shoppinglist-edit/shoppinglist-edit.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppinglistEditComponent,
    RecipeitemComponent,
    RecipelistComponent,
    RecipesComponent,
    RecipedetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
