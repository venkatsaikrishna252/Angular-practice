import { Component } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent {

  universitiesDataList :any[]=[];
  showTable:boolean;
  
  


  constructor(private universityServices:UniversityService){

  }

  getAllUniversities(){
    this.universityServices.getAllUniversitiesList().subscribe(
      (successResponse : any)=>{
       this.showTable=true;
       successResponse.forEach((university)=>{
        
        if(university.country==="Canada" || university.country==="India"){
          university['status']="open";
          this.universitiesDataList.push(university);
          
        }else{
          university['status']="close";
          this.universitiesDataList.push(university);
        }
        

          // console.log(this.universitiesDataList);
      
       })
      //  this.universitiesDataList=successResponse; 
       
        
      },
      (errorResponse : any)=>{
        this.universitiesDataList=errorResponse;
        console.log(this.universitiesDataList);

      }
    )
  }
  

  }
