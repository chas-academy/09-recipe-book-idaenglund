import { Component, OnInit, Input } from '@angular/core';
import { Saved } from '../saved.model';  
import { SavedService } from '../saved.service';  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';  
import { debug } from 'util';


@Component({
  selector: 'app-saved-details',
  templateUrl: './saved-details.component.html',
  styleUrls: ['./saved-details.component.css']
})
export class SavedDetailsComponent implements OnInit {
  list: Saved; 

  constructor(
    private service: SavedService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSaved();   
  }

  getSaved(): void {
    const listId = +this.route.snapshot.paramMap.get('id'); 
    const that = this; 
    this.service.getList(listId)
     .then((list: Saved) => {
       return that.list = list; 
      });
  }

  saveSaved(SavedId: number) {
      
  }

}
