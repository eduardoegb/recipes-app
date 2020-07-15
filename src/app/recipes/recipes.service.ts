import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
