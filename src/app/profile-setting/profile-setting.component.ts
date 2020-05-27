import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { FetchResponseService } from '../fetch-response.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit {

  userId: string = '';
  userDetails: any = {};
  displayMsg: string;
  constructor(private shareData: ShareDataService, private fetchServ: FetchResponseService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('loginUser');
    this.fetchServ.fetchUser(this.userId).subscribe(data => {
      this.userDetails = data;
    })
  }

  submitDetails(){
    console.log(this.userDetails);
    this.updateUser();
  }

  updateUser(){
    this.fetchServ.updateUserDetails(this.userId, this.userDetails).subscribe(()=>{
      console.log("User's information updated");
      this.displayMsg = "User's Details have been updated successfully";
    },
    error=>{
      console.log("An error occurred while updating the record. Please re try in some time");
      this.displayMsg = "Changes could not be saved. Please retry after some time.";
    });
  }

}
