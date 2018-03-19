import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Saved } from "./saved.model";

@Injectable()
export class SavedService {
  constructor() {}

  getLists() {
    const LISTS = [];
    const promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3000/saved")
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
    const promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/saved/${listId}`)
        .then(res => res.json())
        .then(res => {
          list = new Saved(res.id, res.title, res.recipes);
          resolve(list);
        });
    });
    return promise;
  }

  addRecipeToList(listId: number, recipeId: number) {
    const promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/saved/${listId}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify( {
          recipes: [recipeId]
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });
    });
  }
}
