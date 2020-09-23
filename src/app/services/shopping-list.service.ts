import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient("Carrots", 10),
    new Ingredient("Salt corns", 2053)
  ];


  getIngredientList(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  constructor() { }
}
