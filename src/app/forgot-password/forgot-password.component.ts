import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FetchResponseService } from '../fetch-response.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  user: string;
  message: string = '';

  constructor(private route: ActivatedRoute, private fetchServ: FetchResponseService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      this.user = params.params.userID;
      
    });
  }

  onSubmit(form : NgForm){
    if (form.valid) {
      if(form.value.password === form.value.cpassword){
        
        this.fetchServ.resetPassword(this.user, form.value.password).subscribe(response => {
          this.message = "Password has been change successfully. Please re-login.";
        });
      } else {
        this.message = "Passwords should match !!!";
      }
      
    } else {
      this.message = "Data is not valid";
    }
  }
  
}
