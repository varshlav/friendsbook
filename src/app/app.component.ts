import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShareDataService } from './share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit{
  title = 'friendsBook';

  constructor(private shareServ: ShareDataService){}
  authStateParent: boolean[] = [false, false];
  ngOnInit(){
    this.shareServ.authState$.subscribe(data => {
      
      this.authStateParent = data;
    });
  }

  /*setAuth(componentReference: any){
    //(activate)="setAuth($event)"
    if(componentReference.authentication){
      componentReference.authentication.subscribe(data => {
        console.log("The authentication was "+ data);
        this.authStateParent = data;
      });
    }
    
  }*/
}
