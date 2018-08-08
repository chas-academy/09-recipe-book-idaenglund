import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";

/* Components */
import { AppComponent } from "./app.component";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";

import { SavedComponent } from "./saved/saved.component";
import { SavedDetailsComponent } from "./saved/saved-details/saved-details.component";

import { FormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";
import { UiModule } from "./ui/ui.module";
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";

// Guards
import { AuthGuard } from "./guard/auth.guard";

// Services
import { RecipeService } from "./recipe.service";
import { SavedService } from "./saved/saved.service";
import { AuthService } from "./shared/auth.service";

// const routes : Routes = [
//   { path: '', component: RecipesComponent }, 
//   { path: 'recipe/:id', component: RecipeDetailsComponent }, 
//   { path: 'saved', component: SavedComponent }, 
//   { path: 'saved/:id', component: SavedDetailsComponent},
// ]; 
// Components
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";
import { NotFoundComponent } from "./notfound/notfound.component";

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      return user ? user.data.access_token : null;
    },
    // TODO: Use environment
    whitelistedDomains: ["http://api-recipebook.test"],
    skipWhenExpired: true
  };
}

const routes: Routes = [
  { path: "", component: RecipesComponent, canActivate: [AuthGuard] },
  { path: "recipe/:id", component: RecipeDetailsComponent,  canActivate: [AuthGuard] },
  { path: "saved", component: SavedComponent,  canActivate: [AuthGuard] },
  { path: "saved/:id", component: SavedDetailsComponent,  canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    SavedComponent,
    SavedDetailsComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    UiModule,
    ClarityModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    })
  ],
  providers: [
    HttpClientModule,
    AuthGuard,
    RecipeService,
    SavedService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
