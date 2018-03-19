import { Component, OnInit, Input } from '@angular/core';
import { Recipe} from '../recipe.model';  
import { RecipeService } from '../../recipe.service';  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';  
import { debug } from 'util';
import { SavedService} from '../../saved/saved.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe; 

  constructor(
    private recipeService: RecipeService,
    private savedService: SavedService, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getRecipe(); 
    
  }

  getRecipe(): void {
    const recipeId = this.route.snapshot.paramMap.get('id'); 
    const that = this; 
    this.recipeService.getRecipe(recipeId)
     .then((recipe: Recipe) => {
       return that.recipe = recipe; 
      });
  }

  saveRecipe(recipeId: number) {
    const listId = 1; 
    this.savedService.addRecipeToList(listId, recipeId);
  }
}
