import { Component } from '@angular/core';
import { UniversityService } from '../university.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent {

  universitiesDataList :any[]=[];
  showTable:boolean;
  country:string="india";
  
  


  constructor(private universityServices:UniversityService){
    // this.getAllUniversities();

  }

  getAllUniversities(){
    this.universityServices.getAllUniversitiesList(this.country).subscribe(
      (successResponse : any)=>{
       this.showTable=true;
       this.universitiesDataList=successResponse;
      //  this.universitiesDataList=successResponse; 
       
        
      },
      (errorResponse : any)=>{
        this.universitiesDataList=errorResponse;
        console.log(this.universitiesDataList);

      }
    )
  }
  

  }
