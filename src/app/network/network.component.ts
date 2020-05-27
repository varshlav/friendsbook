import { Component, OnInit } from '@angular/core';
import { FetchResponseService } from '../fetch-response.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  constructor(private fetchServ: FetchResponseService, private shareServ: ShareDataService) { }
  pendingRequest: string[] = [];
  friends: string[] = [];

  ngOnInit() {
    let userId = localStorage.getItem('loginUser');
    this.fetchServ.getAllFriends().subscribe(response => {
      for(let i = 0;i < response.length; i++){
        if(response[i].status.includes('Pending')){
            if(response[i].friendId === userId){
              /*this.fetchServ.fetchUser(response[i].userId).subscribe((data:any)=>{
                this.pendingRequest.push(data.firstName + " " + data.lastName);
              });*/
              this.pendingRequest.push(response[i].userId);
            }
        } else if(response[i].status.includes('friend') || response[i].status.includes('Friend')){
            if(response[i].friendId === userId){
              /*this.fetchServ.fetchUser(response[i].userId).subscribe((data:any)=>{
                this.friends.push(data.firstName + " " + data.lastName);
              });*/
              this.friends.push(response[i].userId);
            }else if(response[i].userId === userId){
              /*this.fetchServ.fetchUser(response[i].friendId).subscribe((data:any)=>{
                this.friends.push(data.firstName + " " + data.lastName);
              });*/
              this.friends.push(response[i].friendId);
            }
        }
      }
      
      this.shareServ.updateConnections(this.friends);
    });
  }

}
