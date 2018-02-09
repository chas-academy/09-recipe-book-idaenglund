import { Component, OnInit, Input } from '@angular/core';
import { Recipe} from '../recipe.model';  
import { RecipeService } from '../../recipe.service';  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';  




@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe; 

  constructor(
    private service: RecipeService, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getRecipe(); 
    
  }

  getRecipe(): void {
    const recipeId = +this.route.snapshot.paramMap.get('id')
    this.service.getRecipe(recipeId)
     .then((recipe) => {
       console.log(recipe); 
     }); 
  }

}
