import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isConnectedToBetaSeries: boolean = false;
  myHome: boolean;

  constructor(public auth: AuthService, private location: Location) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    // $(".button-collapse").sideNav();
    this.isConnectedToBetaSeries = localStorage.getItem('access_token_api') !== null;
  }
}
