import { Component, OnInit } from '@angular/core';
import { CallbackHttpService } from '../services/callback-http.service';
import { Router, ActivatedRoute }  from '@angular/router';


@Component({
  selector: 'app-redirect-auth-api',
  templateUrl: './redirect-auth-api.component.html',
  styleUrls: ['./redirect-auth-api.component.css']
})
export class RedirectAuthApiComponent implements OnInit {
private homeId
  constructor(
  	private router: Router,
  	private callbackHttpService: CallbackHttpService,
  	private activatedRoute: ActivatedRoute
  	) {}

  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe(params => {
  		let code = params.code;
  		if (typeof(code) != 'undefined') {
  		    this.callbackHttpService.postAccessToken(code)
            .then(() => this.router.navigate(['/']));
  		}
    });
  }

}
