import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../Recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recepies: Recipe[] = [
    new Recipe("Paella", "Very yummy", "https://upload.wikimedia.org/wikipedia/commons/4/41/Paella_Valenciana%2C_gastronom%C3%ADa_de_Torreblanca.jpg",),
    new Recipe("Carbonara", "also yummy", "https://cdn.pixabay.com/photo/2011/04/29/11/20/spaghetti-7113_1280.jpg")
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  onNewSelection(recipe: Recipe) {
    //console.log("onNewSelection entered sending" + recipe.name)
    this.selectedRecipe.emit(recipe);
  }


  ngOnInit(): void {
  }

}
