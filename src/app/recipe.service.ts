import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
//import { HeaderComponent } from './ui/layout/header/header.component';

const query = 'pasta';
const APPID = environment.app_id;
const APPKEY = environment.app_key;

@Injectable()
export class RecipeService {
  private recipes = new BehaviorSubject<Recipe[]>([]);
  recipe$ = this.recipes.asObservable();

  constructor() {}

  getRecipes() {
    const RECIPES = [];
    const promise = new Promise((resolve, reject) => {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`)
      // fetch(`http://localhost:3000/hits`)
        .then(res => res.json())
        .then(res => {
          res.hits.forEach(item => {
            let recipeId = item.recipe.uri.split('#')[1];
            RECIPES.push(
              new Recipe(
                recipeId,
                item.recipe.url,
                item.recipe.label,
                item.recipe.image,
                item.recipe.ingredientLines,
                item.recipe.healthLabels
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
  getRecipe(recipeId: string) {
    let recipe: Recipe;
    let recipeUrl = encodeURIComponent(`http://www.edamam.com/ontologies/edamam.owl#${recipeId}`);
    const promise = new Promise((resolve, reject) => {
      fetch(`https://api.edamam.com/search?r=${recipeUrl}&app_id=${APPID}&app_key=${APPKEY}`)
      // fetch(`http://localhost:3000/hits/${recipeId}`)
        .then(res => res.json())
        .then(res => {
          recipe = new Recipe(
            res[0].uri,
            res[0].url,
            res[0].label,
            res[0].image,
            res[0].ingredientLines,
            res[0].healthLabels
          );
          resolve(recipe);
        });
    });
    return promise;
  }
  
}
