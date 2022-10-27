import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifypositionComponent } from './modifyposition/modifyposition.component';
import { ModifyuserComponent } from './modifyuser/modifyuser.component';
import { ShowallpositionComponent } from './showallposition/showallposition.component';
import { ShowallsupervisorComponent } from './showallsupervisor/showallsupervisor.component';

const routes: Routes = [
  { path: 'allposition', component: ShowallpositionComponent },
  { path: 'allmember', component: ShowallsupervisorComponent },
  { path: 'modifyuser', component: ModifyuserComponent },
  { path: 'modifyposition', component: ModifypositionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
