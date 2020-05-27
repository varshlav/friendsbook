import { Component, OnInit } from '@angular/core';
import { FetchResponseService } from '../fetch-response.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  
  emailEntered: string;
  alertMessage: string = '';


  constructor(private fetchData: FetchResponseService, private router: Router) { }

  ngOnInit() {
    let req = {
      "email": "lvarshney@gmail",
      "password": "gupta123"
  };
  
    this.fetchData.loginUser(req).subscribe((data: any) => {
      localStorage.setItem("loginToken", data.token);
    });
  }

  enterEmail(){
    this.alertMessage = "";
  }

  verifyEmail(){
    this.fetchData.verifyEmail(this.emailEntered).subscribe(data => {
      if(data[0] && data[0].id){
        this.router.navigate(['reset'], { queryParams: { userID: data[0].id } });
      } else {
        
        this.alertMessage = "User not found. Please enter valid email id..";
      }
      
    });
  }

}
