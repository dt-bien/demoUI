import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { positionApi, rootURL } from './appconstant';
import { Position } from './Entity/position';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http : HttpClient, private _snackBar: MatSnackBar) { }

  
  getAllPosition() : Observable<HttpResponse<Position[]>> {
    return this.http.get<Position[]>(
        rootURL + positionApi,
       {observe: 'response'}
   ).pipe( catchError(this.handleError));
  }

  getPositionById(id : string) : Observable<HttpResponse<Position[]>> {
    return this.http.get<Position[]>(
        rootURL + positionApi +"?id="+ id,
       {observe: 'response'}
   ).pipe( catchError(this.handleError));
  }

  createPosition(data: any){
    return this.http.post(
        rootURL + positionApi,data,
        {observe: 'response'}
     
   ).pipe( catchError(this.handleError));
  }

  deleteById(id : string) : Observable<HttpResponse<any>> {
    return this.http.delete(
        rootURL + positionApi + "?id="+id,
       {observe: 'response'}
   ).pipe( catchError(this.handleError));
  }

  updateById(id: string,data: any) : Observable<HttpResponse<any>> {
    return this.http.put(
        rootURL + positionApi +"?id="+ id,data,
       {observe: 'response'}
   );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message,"",{duration:3000});
  }




  handleError(error: any) {
    let errorMessage = '';
    this.openSnackBar("Đã có lỗi xảy ra")
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   
    return throwError(() => {
      return errorMessage;
    });
  }
}
