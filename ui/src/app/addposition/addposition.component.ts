import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Position } from '../Entity/position';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-addposition',
  templateUrl: './addposition.component.html',
  styleUrls: ['./addposition.component.css']
})
export class AddpositionComponent implements OnInit {

  constructor(private _positionService : PositionService,) { }
  @Output() newItemEvent  = new EventEmitter<Position>();
  saveObject: Position = new Position();
  

  searchControl = new FormControl('');
 
  ngOnInit(): void {
   
    this.searchControl.valueChanges.subscribe( (m ) => {
      this.saveObject.PositionName = m || "";
    }
    )
  }
  onSave() { 
 
   this.newItemEvent.emit(this.saveObject);
   // this.setData();

  }

  onChange(searchValue: any): void {  
    console.log(searchValue);
  }

}
