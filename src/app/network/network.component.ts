import { Component, OnInit } from '@angular/core';
import { FetchResponseService } from '../fetch-response.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  pendingRequest: string[] = [];
  constructor(private fetchServ: FetchResponseService, private shareServ: ShareDataService) { }
  

  ngOnInit() {
    this.shareServ.pending$.subscribe(friendlist => {
      this.pendingRequest = friendlist;
    });
    
  }

}
