import { Recipe } from '../recipes/recipe.model';  

export class Saved {
  public id: number; 
  public title: string; 
  public recipes: Recipe[]; 

  constructor(id:number, title: string, recipes: Recipe[]) {
    this.id = id, 
    this.title = title, 
    this.recipes = recipes; 
  }
}