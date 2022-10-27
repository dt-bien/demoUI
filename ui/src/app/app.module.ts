import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowallpositionComponent } from './showallposition/showallposition.component';
import { ShowallsupervisorComponent } from './showallsupervisor/showallsupervisor.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'  ;
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddpositionComponent } from './addposition/addposition.component';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModifypositionComponent } from './modifyposition/modifyposition.component';
import { ModifyuserComponent } from './modifyuser/modifyuser.component';
import { SelectsupervisorComponent } from './selectsupervisor/selectsupervisor.component';
import { SelectpositionComponent } from './selectposition/selectposition.component';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';

import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowallpositionComponent,
    ShowallsupervisorComponent,
    AddpositionComponent,
    MenuComponent,
    ModifypositionComponent,
    ModifyuserComponent,
    SelectsupervisorComponent,
    SelectpositionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
