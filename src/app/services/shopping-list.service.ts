import {EventEmitter} from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredient: Ingredients [] = [
    new Ingredients('Apples', 5),
    new Ingredients('Bananas', 5),
  ];

  getIngredientsArr() {
    return this.ingredient.slice();
  }

  addIngredients(ingredients: Ingredients) {
    this.ingredient.push(ingredients);
    this.ingredientsChanged.emit(this.ingredient.slice());
  }

   addIngredientToSL(ingredients: Ingredients []) {
    this.ingredient.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredient.slice());

  }
}
