import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RelatedMember } from '../Entity/relatedmember';
import { UserService } from '../user.service';

@Component({
  selector: 'app-selectsupervisor',
  templateUrl: './selectsupervisor.component.html',
  styleUrls: ['./selectsupervisor.component.css']
})
export class SelectsupervisorComponent implements OnInit {


  constructor(private _userService : UserService) { }
  @Output() newItemEvent  = new EventEmitter<RelatedMember>();
  ngOnInit(): void {
    this.getAllUser();
    this.searchControl.valueChanges.subscribe( (m ) => {
      this.selected_data = m ;
      this.onChange();
    }
    )
  }
  data_lst :any;
  selected_data : any;
  searchControl = new FormControl('');

  getAllUser() {
    this._userService.getAllUser().subscribe( (data) => {
      console.log(data.body);
      this.data_lst = data.body;
      
    })
  }

  onChange() {
    this.newItemEvent.emit(this.selected_data);
  }


}
