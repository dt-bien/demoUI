import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';
import { relatedmemberApi, rootURL } from './appconstant';
import { RelatedMember } from './Entity/relatedmember';

@Injectable({
  providedIn: 'root'
})
export class RelatedmemberService {

  
  constructor(private http : HttpClient, private _snackBar: MatSnackBar) { }

  
  // getAllPosition() : Observable<HttpResponse<RelatedMember[]>> {
  //   return this.http.get<RelatedMember[]>(
  //       rootURL + relatedmemberApi,
  //      {observe: 'response'}
  //  ).pipe( catchError(this.handleError));
  // }

  getRelatedMember(id : string) : Observable<HttpResponse<RelatedMember[]>> {
    return this.http.get<RelatedMember[]>(
        rootURL + relatedmemberApi  + "?id="+ id,
       {observe: 'response'}
   ).pipe( catchError(this.handleError));
  }

  // createPosition(data: any){
  //   return this.http.post(
  //       rootURL + relatedmemberApi,data,
  //       {observe: 'response'}
     
  //  ).pipe( catchError(this.handleError));
  // }

  // deleteById(id : string) : Observable<HttpResponse<any>> {
  //   return this.http.delete(
  //       rootURL + relatedmemberApi + "?id="+id,
  //      {observe: 'response'}
  //  ).pipe( catchError(this.handleError));
  // }

  // updateById(id: string,data: any) : Observable<HttpResponse<any>> {
  //   return this.http.put(
  //       rootURL + relatedmemberApi + id,data,
  //      {observe: 'response'}
  //  );
  // }

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
