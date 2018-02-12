import { Component, OnInit, Input } from '@angular/core';
import { Recipe} from '../recipe.model';  
import { RecipeService } from '../../recipe.service';  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';  
import { debug } from 'util';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe; 
  constructor(
    private service: RecipeService, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getRecipe(); 
    
  }

  getRecipe(): void {
    const recipeId = this.route.snapshot.paramMap.get('id')
    this.service.getRecipe(recipeId)
     .then((res) => {
       console.log(res);
       return this.recipe = res
      });
  }

  saveRecipe(recipeId:string) {
    debugger; 
  }

}
