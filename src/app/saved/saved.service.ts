import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Saved } from "./saved.model";
import { RecipeService } from "../recipe.service";
import { AuthService } from "../shared/auth.service";

const API_URL = environment.api_url; // http://api-recipebook.test/api

@Injectable()
export class SavedService {
  constructor(private recipeService: RecipeService, private authService: AuthService) {}

  createList(listTitle: string, userId: number) {
    const promise = new Promise((resolve, reject) => {
      fetch(`${API_URL}/saved`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: listTitle,
          recipes: [],
          user_id: userId
        }),
        method: "POST"
      })
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.error(err);
        });
    });

    return promise;
  }

  getLists() {
    const LISTS = [];
    const promise = new Promise((resolve, reject) => {
      fetch(`${API_URL}/saved/user/${this.authService.getUser()}`)
        .then(res => res.json())
        .then(res => {
          res.forEach(item => {
            LISTS.push(new Saved(item.id, item.title, item.recipes));
          });

          resolve(LISTS);
        })
        .catch(err => {
          console.error(err);
        });
    });

    return promise;
  }

  getList(listId: number | string) {
    let list: Saved;
    let recipes = [];

    const promise = new Promise((resolve, reject) => {
      fetch(`${API_URL}/saved/${listId}`)
        .then(res => res.json())
        .then(res => {
          return Promise.all(
            res.recipes.map(recipeId => {
              return this.recipeService.getRecipe(encodeURIComponent(recipeId));
            })
          )
            .then(recipes => {
              res.recipes = recipes;
              resolve(res);
            })
            .catch(err => {
              console.error(err);
            });
        });
    });
    return promise;
  }

  addRecipeToList(listId: number, recipeId: number) {
    const promise = new Promise((resolve, reject) => {
      fetch(`${API_URL}/saved/${listId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
          recipe: recipeId
        })
      })
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.error(err);
        });
    });
  }

  deleteRecipeFromList(listId: number, recipeId: string) {
    const promise = new Promise((resolve, reject) => {
      fetch(`${API_URL}/saved/${listId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET"
      })
        .then(res => res.json())
        .then(res => {
          // const newRecipes = res.recipes.filter(recipe => recipe !== recipeId);

          return fetch(`${API_URL}/saved/${listId}`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({
              recipe: recipeId
            })
          });
        })
        .then(res => resolve(res))
        .catch(err => {
          console.error(err);
        });
    });
  }
}
