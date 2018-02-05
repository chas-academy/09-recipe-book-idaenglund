import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'; 


@Component({
  selector: 'app-recipes',
  templateUrl: '/recipes.component.html',
  styleUrls: ['/recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipe; 
  constructor() {
      
  }
   ngOnInit() {
       console.log("Yes"); 
   } 
}
