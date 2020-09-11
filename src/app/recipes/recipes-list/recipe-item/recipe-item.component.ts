import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../Recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Output() newDescription = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  updateDescription(){
      this.newDescription.emit();
     // console.log("Button clicked - emitting event")
  }
}
