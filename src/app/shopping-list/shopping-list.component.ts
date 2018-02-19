import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredients [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredient = this.shoppingListService.getIngredientsArr();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:  Ingredients[]) => {
        this.ingredient = ingredients;
      }
    );
  }

}
