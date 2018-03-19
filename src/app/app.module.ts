import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 


/* Components */
import { AppComponent } from './app.component';

import { RecipesComponent} from './recipes/recipes.component'; 
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'; 
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

import { SavedComponent } from './saved/saved.component';
import { SavedDetailsComponent } from './saved/saved-details/saved-details.component';


import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular'; 
import { UiModule } from './ui/ui.module';
//Service
import { RecipeService } from './recipe.service'; 
import { SavedService } from './saved/saved.service'; 

const routes : Routes = [
{ path: '', component: RecipesComponent }, 
{ path: 'recipe/:id', component: RecipeDetailsComponent }, 
{ path: 'saved', component: SavedComponent }, 
{ path: 'saved/saved/:id', component: SavedDetailsComponent},
]; 


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent, 
    RecipeItemComponent, 
    RecipeDetailsComponent,
    SavedComponent, 
    SavedDetailsComponent
  ],
  imports: [
    FormsModule,
    UiModule, 
    ClarityModule, 
    BrowserModule,
    RouterModule.forRoot(
      routes, 
      // {enableTracing : true } <--debugga routes
    )
  ],
  providers:[RecipeService, SavedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
