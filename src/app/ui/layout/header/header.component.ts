import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styles: []
})
export class HeaderComponent {
  subLinks = [
    { link : ['/', 'saved'], label: 'Saved Recipes' },
    { link : ['/', 'vegan'], label: 'Vegan Recipes' },
    { link : ['/', 'vegetarian'], label: 'Vegetarian Recipes' },
    { link : ['/', 'glutenfree'], label: 'Glutenfree Recipes' }
  ]
}