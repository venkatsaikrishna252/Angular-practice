import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { WilmuDetailsComponent } from './wilmu-details/wilmu-details.component';
import { SportsComponent } from './wilmu-details/sports/sports.component';
import { AdmissionsComponent } from './wilmu-details/admissions/admissions.component';
import { OptComponent } from './wilmu-details/opt/opt.component';
import { CptComponent } from './wilmu-details/cpt/cpt.component';
import { UniversityComponent } from './university/university.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponentComponent,
    HeaderComponent,
    NavigationComponent,
    StudentDetailsComponent,
    StaffDetailsComponent,
    WilmuDetailsComponent,
    SportsComponent,
    AdmissionsComponent,
    OptComponent,
    CptComponent,
    UniversityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
