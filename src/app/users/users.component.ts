import { Component, OnInit } from '@angular/core';
import { FetchResponseService } from '../fetch-response.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private fetchServ: FetchResponseService) { }

  ngOnInit() {
    
    this.fetchServ.fetchAllUsers().subscribe(response => {
      this.users = response;
    });
  }

}
