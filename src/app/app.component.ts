import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isConnectedToBetaSeries: boolean = false;

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    $(".button-collapse").sideNav();
    this.isConnectedToBetaSeries = localStorage.getItem('access_token_api') !== null;
  }
}
