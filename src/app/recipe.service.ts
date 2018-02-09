import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/map'; 

import { Injectable } from '@angular/core';
import {Recipe} from './recipes/recipe.model'; 
import { Observable } from 'rxjs/Observable'; 
import { environment } from '../environments/environment';





@Injectable()
export class RecipeService {
  constructor() {

  }
    
  getRecipes(query) {
    const RECIPES = []; 
    const APPKEY = environment.app_key; 
    const APPID = environment.app_id; 
    let recipe = null; 
    const promise = new Promise((resolve, reject) => {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`) 
      .then(res => res.json())
      .then(res => {
          res.hits.forEach(item => {
            RECIPES.push(new Recipe(
            encodeURIComponent(item.recipe.uri),      
            item.recipe.url, 
            item.recipe.label, 
            item.recipe.image, 
            item.recipe.ingredientLines, 
            item.recipe.healthLabels)); 
 
        }); 
        resolve(RECIPES); 
      }); 
        
    }); 
  
    return promise; 
  }
    getRecipe(recipeId: string) {
      let recipe: Recipe; 
      const APPKEY = environment.app_key; 
      const APPID = environment.app_id;
      const promise = new Promise ((resolve, reject) => {
        fetch(`https://api.edamam.com/search?r=${recipeId}&app_id=${APPID}&app_key=${APPKEY}`)
        .then(res => res.json())
        .then(res=> {
          console.log(res)
          recipe = new Recipe(
            res[0].uri,
            res[0].url, 
            res[0].label, 
            res[0].image, 
            res[0].ingredientLines, 
            res[0].healthLabels);
            resolve(recipe);
        });
      }); 
      return promise;
   
    }
}
