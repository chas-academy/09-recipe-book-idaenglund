import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { ActivatedRoute, ParamMap, RouterModule, Routes } from '@angular/router'; 
import { RecipeService } from '../../../recipe.service';
import { AuthService } from '../../../shared/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styles: []
})
export class HeaderComponent implements OnInit {
  query: string; 



  constructor(
    private service: RecipeService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.query = '';
  }

  onEnter(query: string) {
    this.query = query;
    this.service.getRecipes(this.query);
  }

  logout() {
    this.auth.logout();
  }

}
