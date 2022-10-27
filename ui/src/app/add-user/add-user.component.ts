import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { rootURL } from '../appconstant';
import { User } from '../Entity/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor( private _userService : UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }
  
  user : User = new User;
  onSelectPosition(data: any) {
    this.user.PositionId = data.Id

  }
  onSelectSup(data : any) {
    this.user.Supervisor_Id = data.Id

  }

  onSave() {
    this._userService.createUser(this.user).subscribe((msg) => {
      if (msg.status == 200) {
        this.openSnackBar("Lưu thành công!");
        window.location.reload();
  
      } else {
        this.openSnackBar("Đã có lỗi xảy ra!")
      }

    })



  }
  openSnackBar(message: string) {
    this._snackBar.open(message,"",{duration:3000});
  }


}
