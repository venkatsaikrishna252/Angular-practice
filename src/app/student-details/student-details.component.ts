import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  studentList:any[]=[
    {name:"sai",id:10,age:22},
    {name:"krishna",id:11,age:19},
    {name:"venkat",id:12,age:17}
  ]

  constructor(){}
  ngOnInit():void{
    this.studentList.forEach((student:any)=>{
      // console.log(student);
      if(student.age>=18){
        // console.log("major");
        student['status']="major";
        
      }else{
        // console.log("minor");
        student['status']="minor";
        
        
      }
    }
    );
    console.log(this.studentList);

  }

  

}
