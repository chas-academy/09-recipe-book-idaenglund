import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
//import { HeaderComponent } from './ui/layout/header/header.component';

@Injectable()
export class RecipeService {
  private recipes = new BehaviorSubject<Recipe[]>([]);
  recipe$ = this.recipes.asObservable();

  constructor() {}

  getRecipes() {
    const RECIPES = [];
    const promise = new Promise((resolve, reject) => {
      //fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`)
      fetch(`http://localhost:3000/hits`)
        .then(res => res.json())
        .then(res => {
          res.forEach(item => {
            RECIPES.push(
              new Recipe(
                item.id,
                item.url,
                item.label,
                item.image,
                item.ingredientLines,
                item.healthLabels
              )
            );
          });

          resolve(RECIPES);
        })
        .catch(reject);
      // Show error message to user?
    });

    return promise;
  }
  getRecipe(recipeId: number | string) {
    let recipe: Recipe;
    const promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/hits/${recipeId}`)
        .then(res => res.json())
        .then(res => {
          recipe = new Recipe(
            res.id,
            res.url,
            res.label,
            res.image,
            res.ingredientLines,
            res.healthLabels
          );
          resolve(recipe);
        });
    });
    return promise;
  }
}
