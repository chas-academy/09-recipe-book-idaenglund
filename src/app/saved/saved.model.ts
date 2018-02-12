import { Recipe } from '../recipes/recipe.model';  

export class Saved {
  public id: string; 
  public title: string; 
  public recipes: Recipe[]; 

  constructor(id:string, title: string, recipes: Recipe[]) {
    this.id = id, 
    this.title = title, 
    this.recipes = recipes; 
  }
}