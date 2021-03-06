import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { FetchResponseService } from '../fetch-response.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo: any;
  posts: any;

  toBePosted: string;

 
  pendingRequest: string[] = [];
  friends: string[] = [];

  constructor(private shareServ: ShareDataService, private fetchData: FetchResponseService) { }

  ngOnInit() {
    this.shareServ.loggedUser$.subscribe(data => {
      this.userInfo = data;
      this.fetchData.fetchUserPosts(data._id).subscribe(res => {
        this.posts = res;
        this.shareServ.getNoOfPosts(this.posts.length);
      });
    });


    this.fetchData.getAllFriends().subscribe(response => {
      for(let i = 0;i < response.length; i++){
        if(response[i].status.includes('Pending')){
            if(response[i].friendId === this.userInfo._id){
              /*this.fetchServ.fetchUser(response[i].userId).subscribe((data:any)=>{
                this.pendingRequest.push(data.firstName + " " + data.lastName);
              });*/
              this.pendingRequest.push(response[i].userId);
            }
        } else if(response[i].status.includes('friend') || response[i].status.includes('Friend')){
            if(response[i].friendId === this.userInfo._id){
              /*this.fetchServ.fetchUser(response[i].userId).subscribe((data:any)=>{
                this.friends.push(data.firstName + " " + data.lastName);
              });*/
              this.friends.push(response[i].userId);
            }else if(response[i].userId === this.userInfo._id){
              /*this.fetchServ.fetchUser(response[i].friendId).subscribe((data:any)=>{
                this.friends.push(data.firstName + " " + data.lastName);
              });*/
              this.friends.push(response[i].friendId);
            }
        }
      }
      
      this.shareServ.updateConnections(this.friends);
      this.shareServ.updatePendingConnections(this.pendingRequest);
    });
  }

  postUpdate() {

    if (this.toBePosted !== '') {
      let req = {
        "isActive": this.userInfo.isActive,
        "post": this.toBePosted,
        "userId": this.userInfo._id,
        "userName": this.userInfo.firstName + " " + this.userInfo.lastName,
        "userPhotoId": this.userInfo.photoId,
        "postImageId": "",
        "isAdmin": this.userInfo.isAdmin,
        "profession": "Scietist",
        "createdDate": new Date()
      };
      this.fetchData.pushPost(req).subscribe(data => {
        this.posts.push(req);
        this.toBePosted = "";
      })
    }
  }
}
