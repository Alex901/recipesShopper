import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recepies: Recipe[] = [
    new Recipe("Paella", "Very yummy", "https://upload.wikimedia.org/wikipedia/commons/4/41/Paella_Valenciana%2C_gastronom%C3%ADa_de_Torreblanca.jpg",),
    new Recipe("Carbonara", "also yummy", "https://cdn.pixabay.com/photo/2011/04/29/11/20/spaghetti-7113_1280.jpg")
  ];

  getRecipes(){
    return this.recepies.slice();
  }
  constructor() { }
}