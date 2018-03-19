import { Component, OnInit } from "@angular/core";
import { resetFakeAsyncZone } from "@angular/core/testing";
import { SavedService } from "./saved.service";
import { Saved } from "./saved.model"; 

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.css"]
})
export class SavedComponent implements OnInit {
  saved: Saved[]; 
  constructor(
    private savedService: SavedService
  ) { }

  ngOnInit() {
    const that = this;
    this.savedService.getLists().then((saved: Saved[]) => {
      return that.saved = saved;
    });
  }
}
