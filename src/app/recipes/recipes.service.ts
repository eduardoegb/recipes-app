import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pork Schnitzel',
      'German pork schnitzel is an easy recipe and it’s perfect for busy weeknights.',
      'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg',
      [new Ingredient('Meat', 2), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'Banana Muffins',
      'Soft and moist Banana Muffins with melty chocolate chips are the ultimate treat.',
      'https://natashaskitchen.com/wp-content/uploads/2019/04/Banana-Muffins-5.jpg',
      [new Ingredient('Bananas', 2), new Ingredient('Chocolate chips', 50)]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes.slice()[id];
  }
}
