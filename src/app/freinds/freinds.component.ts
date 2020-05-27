import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-freinds',
  templateUrl: './freinds.component.html',
  styleUrls: ['./freinds.component.scss']
})
export class FreindsComponent implements OnInit {

  friends: string[] = [];
  constructor(private shareServ: ShareDataService) { }

  ngOnInit() {
    this.shareServ.connections$.subscribe(friendlist => {
      this.friends = friendlist;
    });
  }

}
