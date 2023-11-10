import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { WilmuDetailsComponent } from './wilmu-details/wilmu-details.component';
import { SportsComponent } from './wilmu-details/sports/sports.component';
import { AdmissionsComponent } from './wilmu-details/admissions/admissions.component';
import { OptComponent } from './wilmu-details/opt/opt.component';
import { CptComponent } from './wilmu-details/cpt/cpt.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  {path:'',redirectTo:"student",pathMatch:'full'},
  {path:'student',component:StudentDetailsComponent},
  {path:'staff',component:StaffDetailsComponent},
  {path:'wilmu',component:WilmuDetailsComponent,children:[
    {path:'sports',component:SportsComponent},
    {path:'admissions',component:AdmissionsComponent},
    {path:'opt',component:OptComponent},
    {path:'cpt',component:CptComponent}
  ]},
  {path:'university',component:UniversityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
