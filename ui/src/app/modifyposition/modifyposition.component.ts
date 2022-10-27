import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Position } from '../Entity/position';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-modifyposition',
  templateUrl: './modifyposition.component.html',
  styleUrls: ['./modifyposition.component.css']
})
export class ModifypositionComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _positionService : PositionService, private _snackBar: MatSnackBar) { }
  searchControl = new FormControl('');
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      
      this.id = params['id'];
      this.position.Id = params['id'];
      
    });

   
    
    this.searchControl.valueChanges.subscribe( (m ) => {
      this.position.PositionName = m || "";
    }
    )
  }

  id: string;
  position : Position = new Position;

  onSave() {
    this._positionService.updateById(this.id, this.position).subscribe( (msg) => {
      if (msg.status == 200) {
        this.openSnackBar("Lưu thành công!");
  
      } else {
        this.openSnackBar("Đã có lỗi xảy ra!")
      }
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message,"",{duration:3000});
  }

}
