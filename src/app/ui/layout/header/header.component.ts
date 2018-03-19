import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { ActivatedRoute, ParamMap, RouterModule, Routes } from '@angular/router'; 
import { RecipeService } from '../../../recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styles: []
})
export class HeaderComponent implements OnInit {
  query: string; 



  constructor(
    private service: RecipeService
  ) { }

  ngOnInit() {;
  }

  onEnter() {
    this.service.getRecipes();
     
  
  }

}
