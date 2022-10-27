import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Position } from '../Entity/position';
import { PositionService } from '../position.service';
@Component({
  selector: 'app-selectposition',
  templateUrl: './selectposition.component.html',
  styleUrls: ['./selectposition.component.css']
})
export class SelectpositionComponent implements OnInit {

  constructor(private _positionService : PositionService) { }

  @Output() newItemEvent  = new EventEmitter<Position>();

  ngOnInit(): void {
    this.getAllPosition();
    this.searchControl.valueChanges.subscribe( (m ) => {
      this.selected_data = m ;
      this.onChange();
    }
    )
  }
  searchControl = new FormControl('');
 

  data_lst :any;
  selected_data : any;

  getAllPosition() {
    this._positionService.getAllPosition().subscribe( (data) => {
      console.log(data.body);
      this.data_lst = data.body;
      
    })
  }
  onChange() {
    this.newItemEvent.emit(this.selected_data);
  }

  

}
