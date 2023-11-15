import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router:Router){
    
  }

  navigateToStudent(){
    this.router.navigate(['student']);
  }
  navigateToStaff(){
    this.router.navigate(['staff']);
  }
  navigateToWilmu(){
    this.router.navigate(['wilmu']);
  }

  navigateToUniversity(){
    this.router.navigate(['university']);
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  navigateToAccount(){
    this.router.navigate(['account']);
  }

  




  
  getStudentDetails(){
    console.log("students called");
    // alert("students");
  }

  getStaffDetails(){
    console.log("staff called");
    // alert("staff");
  }

  getWilmuDetails(){
    console.log("wilmu called");
    // alert("wilmu");
  }

  


}
