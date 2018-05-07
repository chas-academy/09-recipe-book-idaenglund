import { Component, OnInit, Output, EventEmitter, Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../../recipe.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  query = ''; 

  constructor(private service: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getRecipes();
    this.query = '';
   
  }

  getRecipes(): void {
    const that = this;
    this.service.getRecipes().then((recipes: Recipe[]) => {
        that.filteredRecipes = recipes;
        that.recipes = recipes; 
    });
    

  }

  filter(type: string) {
    if (type === "All") {
      this.filteredRecipes = this.recipes;
    } else {
      this.filteredRecipes = this.recipes.filter(recipe => recipe.healthLabels.indexOf(type) !== -1)
    }
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
  
}
