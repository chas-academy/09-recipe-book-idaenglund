import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'; 
import { ActivatedRoute, ParamMap } from "@angular/router";



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
   @Input () recipe;  
   @Output() recipeItem = new EventEmitter<Recipe>(); 
  constructor() {
      
  }
   ngOnInit() {

    // Ta koden från MASHUP - projektet 
    // Make an API-call to any food API
    // Populate the recipes array with items from that response 
       console.log("This is a recipe Itemlist", this.recipe); 
   } 

   onClick(recipe: Recipe) {

       this.recipeItem.emit(recipe); 
   }
}
