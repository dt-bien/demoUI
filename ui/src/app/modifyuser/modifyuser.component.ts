import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../Entity/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _userService : UserService, private _snackBar: MatSnackBar) { }

  id:any;
  searchControl = new FormControl('');
  ngOnInit(): void {
  
    this.route.queryParams.subscribe(params => {
      
      this.id = params['id'];
      this.user.Id = params['id'];
      
    });
  }
  user : User = new User;

  update() {
    this._userService.updateById(this.id, this.user).subscribe( (msg) => {
      if (msg.status == 200) {
        this.openSnackBar("Lưu thành công!");
  
      } else {
        this.openSnackBar("Đã có lỗi xảy ra!")
      }

    
    })

  }

  onSelectPosition(data: any) {
    this.user.PositionId = data.Id

  }
  onSelectSup(data : any) {
    this.user.Supervisor_Id = data.Id

  }

  openSnackBar(message: string) {
    this._snackBar.open(message,"",{duration:3000});
  }

}
