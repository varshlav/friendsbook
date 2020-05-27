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

  constructor(private shareServ: ShareDataService, private fetchData: FetchResponseService) { }

  ngOnInit() {
    this.shareServ.loggedUser$.subscribe(data => {
      this.userInfo = data;
      this.fetchData.fetchUserPosts(data._id).subscribe(res => {
        this.posts = res;
        this.shareServ.getNoOfPosts(this.posts.length);
      });
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
