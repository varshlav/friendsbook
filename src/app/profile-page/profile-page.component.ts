import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { FetchResponseService } from '../fetch-response.service';



@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  
  photoID: string;
  photo: any;
  noOfPosts: number;
  friendCount: number;
  imgSrc : any;
  base64Image : any;
  imageBlobUrl: string | ArrayBuffer;
 

  constructor(private shareServ: ShareDataService, private fetchData: FetchResponseService) { }

  ngOnInit() {
    this.shareServ.loggedUser$.subscribe(data => {
      this.photoID = data.photoId;
    });

    let token = localStorage.getItem('loginToken');
    fetch('https://nodejs-fb-app.herokuapp.com/files/5df8760cc3765f000445f3bc', {
      headers: {
          Authorization: 'Bearer '+token
      } 
   }).then((response) => response.blob()).then((blob) => {
       const imageUrl = URL.createObjectURL(blob);
       const img = document.querySelector('#displayPic');
       img.addEventListener('load', () => URL.revokeObjectURL(imageUrl));
       (<HTMLImageElement>document.querySelector('#displayPic')).src  = imageUrl;
   });



    this.shareServ.totalPost$.subscribe(total => {
      this.noOfPosts = total;
    });


    this.shareServ.connections$.subscribe(friendlist => {
      this.friendCount = friendlist.length;
    });
  }




}
