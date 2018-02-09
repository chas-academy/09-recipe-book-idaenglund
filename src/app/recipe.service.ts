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
        console.log(res); 
          res.hits.forEach((item, index) => {
            RECIPES.push(new Recipe(
            index,      
            item.recipe.url, 
            item.recipe.label, 
            item.recipe.image, 
            item.recipe.ingredientsLines, 
            item.recipe.healthLabels)); 
 
        }); 
        resolve(RECIPES); 
      }); 
        
    }); 
  
    return promise; 
  }
    getRecipe(recipeId:number | string ) {
      let recipe = null; 
      const APPKEY = environment.app_key; 
      const APPID = environment.app_id;
      const promise = new Promise ((resolve, reject) => {
        fetch(`https://api.edamam.com/search?r=${recipeId}&app_id=${APPID}&app_key=${APPKEY}`)
        .then(res => res.json())
        .then(res=> {
          recipe =  new Recipe(
            res[0].uri,
            res[0].url, 
            res[0].label, 
            res[0].image, 
            res[0].ingredientsLines, 
            recipe.healthLabels); 

        }); 

          resolve(recipe);
        //return Observable.of(recipe); 
      }); 
      // return this.getRecipes()
      // .map(recipes => recipes.find(recipe => recipe.id === +recipeId)); 
      return promise;
   
    }
}

  // ActivatedRoute? 
