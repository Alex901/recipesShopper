import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe : Recipe

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  toShoppinglist(){
    this.recipeService.ingredientsToList(this.recipe.ingredients);
  }

}
