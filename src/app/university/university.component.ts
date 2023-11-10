import { Component } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent {

  universitiesDataList :any;

  constructor(private universityServices:UniversityService){

  }

  getAllUniversities(){
    this.universityServices.getAllUniversitiesList().subscribe(
      (successResponse)=>{
        this.universitiesDataList=successResponse;
        console.log(this.universitiesDataList);
        
      },
      (errorResponse)=>{
        this.universitiesDataList=errorResponse;
        console.log(this.universitiesDataList);

      }
    )
  }
  

  }
