import { Component, OnInit } from '@angular/core';
import {Recipe} from '../shared/recipe.model';
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  this.recipeService.selectedRecipe
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
