import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../../recipe.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { debug } from "util";
import { SavedService } from "../../saved/saved.service";
import { AuthService } from "../../shared/auth.service";
import { Saved } from "../../saved/saved.model";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  lists: Saved[];

  private showModal: boolean;
  private selectedId: number;

  constructor(
    private authService: AuthService,
    private recipeService: RecipeService,
    private savedService: SavedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipe();
    this.getLists();
  }

  getRecipe(): void {
    const recipeId = this.route.snapshot.paramMap.get("id");
    const that = this;
    this.recipeService.getRecipe(recipeId).then((recipe: Recipe) => {
      return (that.recipe = recipe);
    });
  }

  getLists(): void {
    this.savedService.getLists().then((lists: Saved[]) => {
      return this.lists = lists
    });
  }

  toggleModal(recipeId: number) {
    this.selectedId = recipeId;
    this.showModal = !this.showModal;
  }

  saveRecipe(listId: number) {
    this.savedService.addRecipeToList(+listId, this.selectedId);
    this.showModal = !this.showModal;
  }

  addList(listTitle: string) {
    this.savedService.createList(listTitle, this.authService.getUser());
    this.showModal = !this.showModal;
  }; 
}
