import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { Recipe } from '../recipe.model'; 
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; 



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
 selectedRecipe: Recipe; 
 recipes: Recipe[]; 
 query: string; 

 
    constructor(
    private service: RecipeService,
    private route: ActivatedRoute 
){}
   
  ngOnInit() {
      this.getRecipes(); 
   } 

   getRecipes(): void {
       const that = this; 
       this.service.getRecipes(this.query).then((recipes: Recipe[]) => {
            return that.recipes = recipes; 
       }); 
   }

   onRecipeSelected(recipe: Recipe){
       this.selectedRecipe = recipe; 

   }

   onKeyUp(event) {
       if(event.keyCode === 13){
           this.getRecipes(); 
       }
       
   }

}
