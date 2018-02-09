import { Recipe } from '../recipes/recipe.model';  

export class Saved {
  public id: string; 
  public title: string; 
  public recipes: Recipe[]; 
}