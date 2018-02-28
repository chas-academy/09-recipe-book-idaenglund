import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { SavedService } from './saved.service'; 

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  constructor(
    private savedService: SavedService
  ) { }

  ngOnInit() {
    
    this.savedService.getLists().then(res => {

    }); 

  }

}



