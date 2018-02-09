import { Recipe } from '../recipes/recipe.model';  

export class Saved {
  public id: number; 
  public title: string; 
  public recipes: Recipe[]; 
}