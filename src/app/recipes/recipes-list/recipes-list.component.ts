import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../Recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recepies: Recipe[] = [
    new Recipe("Paella","Very yummy", "https://cdn.pixabay.com/photo/2017/06/21/22/42/paella-2428933_960_720.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
