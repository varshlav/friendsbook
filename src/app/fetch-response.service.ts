import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FetchResponseService {
  
  
  private Root_Url = "https://nodejs-fb-app.herokuapp.com/";
  private req = {
    "firstName": "Lavesh",
    "lastName": "Gupta",
    "email": "lgupta@gmail.com",
    "dob":"01/01/1989",
    "gender":"female",
    "password": "gupta123"
    };

 
    
  constructor(
    private http: HttpClient,
    private router: Router
) { }


    registerUser(formData: any){
      formData.dob = '01/01/20165';
      formData.gender = 'Male';
      return this.http.post(this.Root_Url+'users/register',formData);
    }

    loginUser(formData){
      return this.http.post(this.Root_Url+'users/authenticate',formData);
    }

    fetchUserPosts(userId: string){
      let request = {
        "id": userId
      };

      return this.http.post(this.Root_Url+'posts/findpostbyuserid',request);
    }

    pushPost(req: any){
      
      return this.http.post(this.Root_Url+'posts/createpost',req)
    }

    getImage(id: string) : Observable<Blob> {   
      let headers = {
        'responseType' : "blob"
      };
      let options = {headers : headers};
      return this.http.get<Blob>(this.Root_Url + 'files/' + id, options);
    }


    fetchAllUsers(){
      return this.http.get(this.Root_Url + 'users/');
    }


    getAllFriends(): any {
      return this.http.get<any>(this.Root_Url+'friends/');
    }


    verifyEmail(emailEntered: string) {
      let request = {
        "email": emailEntered
      };
      return this.http.post<any>(this.Root_Url+'users/finduserbyemail/', request);
    }

    resetPassword(user: string, password: string) {
      let request = {
        'password' : password
      }
      return this.http.put<any>(this.Root_Url+ 'users/' + user, request);
    }

    fetchUser(id: string){
      return this.http.get(this.Root_Url + 'users/' + id);
    }

    updateUserDetails(user: string, userDetails: any){
      return this.http.put<any>(this.Root_Url+ 'users/' + user, userDetails);
    }
}

