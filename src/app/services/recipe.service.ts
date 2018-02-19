import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../shared/recipe.model';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable( )
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'This issa test recipe',
      'https://vignette.wikia.nocookie.net/brickleberry/images/3/34/Yummy_lasagna.jpg/revision/latest?cb=20161104044724',
      [
        new Ingredients('eba', 2),
        new Ingredients('tea', 4)
      ]
    ),
    new Recipe(
      'Lasagna',
      'This issa test recipe',
      'https://vignette.wikia.nocookie.net/brickleberry/images/3/34/Yummy_lasagna.jpg/revision/latest?cb=20161104044724',
      [new Ingredients('Lmao', 2),
        new Ingredients('Family', 4)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipeArr() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients []) {
    this.shoppingListService.addIngredientToSL(ingredients);
  }
}
