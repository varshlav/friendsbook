import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FetchResponseService } from '../fetch-response.service';
import { Router } from '@angular/router';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fetchService: FetchResponseService, private router: Router, private shareService: ShareDataService) { }

  @Output() authentication = new EventEmitter<boolean>();

  ngOnInit() {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("loginUser");
    this.shareService.setAuth(false, false, {});
  }

  onSubmit(form: NgForm){
    this.fetchService.loginUser(form.value).subscribe((data:any)=>{
      if(data.token){
        this.router.navigate(['home']);
       // this.authentication.emit(true);
       this.shareService.setAuth(true, data.isAdmin, data);
       localStorage.setItem("loginToken", data.token);
       localStorage.setItem("loginUser", data._id);

      } else {
        this.shareService.setAuth(false, false, {});
      }
    },
    err =>{
      console.log("Incorrect username or password")
    });
    
  }
}
