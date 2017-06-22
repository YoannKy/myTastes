import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.token = localStorage.getItem('access_token_api');
  }

}
