import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
//import { HeaderComponent } from './ui/layout/header/header.component';

<<<<<<< HEAD
const query = 'pasta';
const APPID = environment.app_id;
const APPKEY = environment.app_key;
=======
const APPKEY = environment.app_key;
const APPID = environment.app_id;
const EDAMAM_API_URL = environment.edamam_api_url;
>>>>>>> Add recipe to list, register user, add new list, remove list, remove recipe from list, make sure you can´t add the same recipe twice

@Injectable()
export class RecipeService {
  private recipes = new BehaviorSubject<Recipe[]>([]);
  recipe$ = this.recipes.asObservable();

  constructor() {}

  getRecipes(query = null) {
    const RECIPES = [];
    let recipe = null;

    const url = query
      ? `${EDAMAM_API_URL}/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`
      : `${EDAMAM_API_URL}/search?q=chicken&app_id=${APPID}&app_key=${APPKEY}`;

    const promise = new Promise((resolve, reject) => {
<<<<<<< HEAD
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`)
      // fetch(`http://localhost:3000/hits`)
        .then(res => res.json())
        .then(res => {
          res.hits.forEach(item => {
            let recipeId = item.recipe.uri.split('#')[1];
            RECIPES.push(
              new Recipe(
                recipeId,
=======
      fetch(url, {
        mode: "cors"
      })
        .then(res => res.json())
        .then(res => {
          res.hits.forEach(item => {
            RECIPES.push(
              new Recipe(
                encodeURIComponent(item.recipe.uri),
>>>>>>> Add recipe to list, register user, add new list, remove list, remove recipe from list, make sure you can´t add the same recipe twice
                item.recipe.url,
                item.recipe.label,
                item.recipe.image,
                item.recipe.ingredientLines,
                item.recipe.healthLabels
              )
            );
          });

          resolve(RECIPES);
          this.recipes.next(RECIPES); // Also trigger Observable next()
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
<<<<<<< HEAD
      fetch(`https://api.edamam.com/search?r=${recipeUrl}&app_id=${APPID}&app_key=${APPKEY}`)
      // fetch(`http://localhost:3000/hits/${recipeId}`)
=======
      fetch(
        `${EDAMAM_API_URL}/search?r=${recipeId}&app_id=${APPID}&app_key=${APPKEY}`
      , {
        mode: "cors"
      })
>>>>>>> Add recipe to list, register user, add new list, remove list, remove recipe from list, make sure you can´t add the same recipe twice
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
