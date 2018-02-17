import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
  new Recipe(
    'Lasagna',
'This issa test recipe',
  'https://vignette.wikia.nocookie.net/brickleberry/images/3/34/Yummy_lasagna.jpg/revision/latest?cb=20161104044724'
  ),new Recipe(
    'Lasagna',
'This issa test recipe',
  'https://vignette.wikia.nocookie.net/brickleberry/images/3/34/Yummy_lasagna.jpg/revision/latest?cb=20161104044724'
  ),

];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
