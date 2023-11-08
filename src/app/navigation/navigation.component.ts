import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  
  getStudentDetails(){
    console.log("students called");
    alert("students");
  }

  getStaffDetails(){
    console.log("staff called");
    alert("staff");
  }

  getWilmuDetails(){
    console.log("wilmu called");
    alert("wilmu");
  }

  


}
