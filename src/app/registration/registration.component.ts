import { Component, OnInit } from '@angular/core';
import { FetchResponseService } from '../fetch-response.service';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fetchService: FetchResponseService) { }

  ngOnInit() {
  }
 
  onSubmit(form: NgForm){
    this.fetchService.registerUser(form.value).subscribe((data:any[])=>{
      alert("User successfully created... Use your email and password to login");
    },
    error => {
      alert("Error encountered on registering user... Please give a retry");
    });
    
    
  }
}
