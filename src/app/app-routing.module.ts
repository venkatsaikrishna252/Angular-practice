import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { WilmuDetailsComponent } from './wilmu-details/wilmu-details.component';

const routes: Routes = [
  {path:'',redirectTo:"student",pathMatch:'full'},
  {path:'student',component:StudentDetailsComponent},
  {path:'staff',component:StaffDetailsComponent},
  {path:'wilmu',component:WilmuDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
