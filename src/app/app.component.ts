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
  myHome: boolean;

  constructor(public auth: AuthService, private location: Location) {
    auth.handleAuthentication();
    console.log(this.location.isCurrentPathEqualTo('/'));
  }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }
}
