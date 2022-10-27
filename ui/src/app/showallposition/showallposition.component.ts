import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { Position } from '../Entity/position';
import {MatTableDataSource} from '@angular/material/table';
import { HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-showallposition',
  templateUrl: './showallposition.component.html',
  styleUrls: ['./showallposition.component.css']
})
export class ShowallpositionComponent implements OnInit {

  constructor(private _positionService : PositionService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.getAllPosition();
  }
  position_lst : any;
 

  getAllPosition() {
    this._positionService.getAllPosition().subscribe( (data) => {
      console.log(data.body);
      this.position_lst = data.body;
      this.dataSource = new MatTableDataSource(this.position_lst);
    })
  }


  addPosition(data:any) {
    this._positionService.createPosition(data).subscribe( (msg) => {
      if (msg.status == 200) {
        this.openSnackBar("Lưu thành công!");
        this.getAllPosition();
      } else {
        this.openSnackBar("Đã có lỗi xảy ra!")
      }

    })
  } 
  receivedata(data : any) {
    console.log(data)
    if (data.PositionName) {
      console.log(123)
      this.addPosition(data);
    }
    
  }

  delete(id: string) {
    this._positionService.deleteById(id).subscribe( (msg) => {
      if (msg.status == 200) {
        this.openSnackBar("Xóa thành công!");
        this.getAllPosition();
      } else {
        this.openSnackBar("Đã có lỗi xảy ra!")
      }

    })
  }
  openSnackBar(message: string) {
    this._snackBar.open(message,"",{duration:3000});
  }


  displayedColumns: string[] = ['Id', 'PositionName',"action"];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
