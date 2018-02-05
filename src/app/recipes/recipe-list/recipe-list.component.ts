import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'; 


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe ('Fidgey Pudding', 'Tasty pudding', 'https://placeholder.it/200x200'), 
        new Recipe ('Burger', 'Best Vegan burger', 'https://placeholder.it/200x200'),
        new Recipe ('Pizza', 'Woop Pizza', 'https://placeholder.it/200x200'),
        new Recipe ('Tacos', 'Tacos with cilantro', 'https://placeholder.it/200x200')
    ]; 

    @Output() recipeItemSelected = new EventEmitter<Recipe>(); 

  constructor() {}
   
  ngOnInit() {
       console.log("This is a list of recipes"); 
   } 

   onRecipeSelected(something: Recipe){
       this.recipeItemSelected.emit(something); 

   }
}
