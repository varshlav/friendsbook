import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }

  private authState = new BehaviorSubject([false, false]); // 1
  authState$ = this.authState.asObservable();

  private totalPost = new BehaviorSubject(0); // 2
  totalPost$ = this.totalPost.asObservable();

  private loggedInUser = new BehaviorSubject({ // 3
    "isAdmin": false,
    "isActive": false,
    "_id": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "dob": "+020165-01-01T00:00:00.000Z",
    "gender": "Male",
    "photoId": "",
    "createdDate": "",
    "__v": 0,
    "token":""
  });
  loggedUser$ = this.loggedInUser.asObservable();


  private connections = new BehaviorSubject([]);
  connections$ = this.connections.asObservable();

  setAuth(authentication: boolean, isAdmin, result: any){
    this.authState.next([authentication, isAdmin]);
    this.loggedInUser.next(result);
  }


  getNoOfPosts(num: number){
    this.totalPost.next(num);
  }

  updateConnections(arr: string[]){
    this.connections.next(arr);
  }




}
