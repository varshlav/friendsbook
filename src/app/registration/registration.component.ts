import { Component, OnInit } from '@angular/core';
import { FetchResponseService } from '../fetch-response.service';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  displayMessage: string;
  constructor(private fetchService: FetchResponseService) { }

  ngOnInit() {
  }
 
  onSubmit(form: NgForm){
    this.fetchService.registerUser(form.value).subscribe((data:any[])=>{
      this.displayMessage = "User successfully created... Use your email ID and password to login";
      form.reset();
    },
    error => {
      this.displayMessage = "Error encountered on registering user..."+ error.message +"Please give a retry";
    });
      
  }
}
