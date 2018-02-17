import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredients [] = [
    new Ingredients('Apples', 5),
    new Ingredients('Bananas', 5),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredient.push(ingredient);
  }

}
