import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { RelatedmemberService } from '../relatedmember.service';
import { UserService } from '../user.service';
import { User } from '../Entity/user';
import { RelatedMember } from '../Entity/relatedmember';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-showallsupervisor',
  templateUrl: './showallsupervisor.component.html',
  styleUrls: ['./showallsupervisor.component.css']
})
export class ShowallsupervisorComponent implements OnInit {

  constructor(private _userService : UserService , private _relatedmemberService : RelatedmemberService ,
    private _positionService : PositionService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUser();
  }
  data_lst :any;
  selected_user :User = new User();
  position : any;

  getUser() {
    this._userService.getAllUser().subscribe( (data) => {
      console.log(data.body);
      this.data_lst = data.body;
      
    })
  }
  onChange() {
    this.getRelatedMember();
    this.getPosition();
  }

  data_related_member : any;
  getPosition() {
    this._positionService.getPositionById(this.selected_user.PositionId).subscribe( (data) => {
      this.position = data.body;
      console.log(data.body)
    })
  }
  getRelatedMember() {
    this._relatedmemberService.getRelatedMember(this.selected_user.Id).subscribe( (data) => {
      console.log(data.body);
      this.data_related_member =  data.body
      
      
    })
  }
  delete() {
    this._userService.deleteById(this.selected_user.Id).subscribe ( (msg) => {
      if (msg.status == 200) {
        this.openSnackBar("Xóa thành công!");
     
      } else {
        this.openSnackBar("Đã có lỗi xảy ra!")
      }

    })
    }

  
  openSnackBar(message: string) {
    this._snackBar.open(message,"",{duration:3000});
  }


 


}
