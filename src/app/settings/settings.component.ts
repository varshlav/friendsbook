import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userID: string;
  constructor() { }

  ngOnInit() {
    this.userID = localStorage.getItem('loginUser');
  }

}
