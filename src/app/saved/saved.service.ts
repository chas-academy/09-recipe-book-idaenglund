import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Saved } from "./saved.model";
import { RecipeService } from "../recipe.service";

@Injectable()
export class SavedService {
  constructor(private recipeService: RecipeService) {}

  getLists() {
    const LISTS = [];
    const promise = new Promise((resolve, reject) => {
      fetch("http://api-recipebook.test/api/saved")
        .then(res => res.json())
        .then(res => {
          res.forEach(item => {
            LISTS.push(new Saved(item.id, item.title, item.recipes));
          });

          resolve(LISTS);
        });
    });

    return promise;
  }


  getList(listId: number | string) {
    let list: Saved;
    let recipes = [];

    const promise = new Promise((resolve, reject) => {
      fetch(`http://api-recipebook.test/api/saved/${listId}`)
        .then(res => res.json())
        .then(res => {
          return Promise.all(
            res.recipes.map(recipeId => {
              return this.recipeService.getRecipe(recipeId);
            })
          ).then(recipes => {
            res.recipes = recipes;
            resolve(res);
          });
        });
    });
    return promise;
  }

  addRecipeToList(listId: number, recipeId: number) {
    const promise = new Promise((resolve, reject) => {
      fetch(`http://api-recipebook.test/api/saved/${listId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify({
          recipes: [recipeId]
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });
    });
  }

  deleteRecipeFromList(listId: number, recipeId: number) {
    const promise = new Promise((resolve, reject) => {
      fetch(`http://api-recipebook.test/api/saved/${listId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET",
      })
        .then(res => res.json())
        .then(res => {
          const newRecipes = res.recipes.filter(recipe => recipe !== recipeId)
          return fetch(`http://api-recipebook.test/api/saved/${listId}`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({
              recipes: newRecipes
            })
          })
        })
        .then(res => console.log(res));
    });
  }

  // removeRecipeFromList(listId: number, recipeId: number) {
  //     console.log('Here you should return the list without your recipe')
  // }
}
