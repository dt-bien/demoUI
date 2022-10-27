import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable ,catchError, throwError} from 'rxjs';
import { rootURL, userApi } from './appconstant';
import { User } from './Entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http : HttpClient, private _snackBar: MatSnackBar) { }

  
  getAllUser() : Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(
        rootURL + userApi,
       {observe: 'response'}
   ).pipe( catchError(this.handleError));
  }

  getUserById(id : string) : Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(
        rootURL + userApi + "?id="+ id,
       {observe: 'response'}
   ).pipe( catchError(this.handleError));
  }

  createUser(data: any){
    return this.http.post(
        rootURL + userApi,data,
        {observe: 'response'}
     
   ).pipe( catchError(this.handleError));
  }

  deleteById(id : string) : Observable<HttpResponse<any>> {
    return this.http.delete(
        rootURL + userApi + "?id="+id,
       {observe: 'response'}
   ).pipe( catchError(this.handleError));
  }

  updateById(id: string,data: any) : Observable<HttpResponse<any>> {
    return this.http.put(
        rootURL + userApi +"?id="+ id,data,
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
