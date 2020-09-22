import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../Recipe.model'
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recepies: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recepies = this.recipeService.getRecipes();
  }

}
