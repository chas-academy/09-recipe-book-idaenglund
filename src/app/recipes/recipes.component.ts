import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'; 
import { RecipeService } from '../recipe.service'; 
import { ActivatedRoute, ParamMap} from '@angular/router'; 
import { Observable } from 'rxjs/Observable'; 


@Component({
  selector: 'app-recipes',
  templateUrl: '/recipes.component.html',
  styleUrls: ['/recipes.component.css']
})
export class RecipesComponent implements OnInit {
  ngOnInit

  private selectedRecipes: number; 

  constructor(){}
  }
