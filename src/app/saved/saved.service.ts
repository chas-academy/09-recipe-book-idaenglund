import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Saved } from './saved.model'; 

@Injectable()
export class SavedService {

  constructor() { }

  getLists() {
    const LISTS = []; 
    const APPKEY = environment.app_key; 
    const APPID = environment.app_id; 
    let recipe = null;

    const promise = new Promise((resolve, reject) => {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`) 
      .then(res => res.json())
      .then(res => {
        debugger; 
          res.hits.forEach(item => {
            LISTS.push(new Saved(
            encodeURIComponent(item.recipe.uri),
            item.recipe.label, 
            item.recipe.recipes)); 
          }); 

        resolve(LISTS);

      })
       });
    
    return promise; 

  }

  addRecipeToList (listId: number, recipeId: string) {

  }

}
