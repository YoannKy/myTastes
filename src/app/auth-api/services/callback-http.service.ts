import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class CallbackHttpService {

  constructor(private http: Http) { }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
	private saveAccessToken(res) {
      let body = res.json();
	  localStorage.setItem('access_token_api', body.access_token)
	}

	private preparePostParameters(code)
	{
	  let urlParams = new URLSearchParams();
	  urlParams.append('client_id', "fec5a9ca0aa3");
	  urlParams.append('client_secret', "5eaff09a9d68764b5cbce9b1f01a3faf");
	  urlParams.append('redirect_uri', "http://localhost:4200/redirect");
	  urlParams.append('code', code);
	  return urlParams;
	}

	postAccessToken(code: string) {
	  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      let options = new RequestOptions({ headers: headers });
      let urlParams = this.preparePostParameters(code);

	  return this.http
	    .post('https://api.betaseries.com/oauth/access_token', urlParams, options)
	    .toPromise()
	    .then(res => this.saveAccessToken(res))
	    .catch(this.handleError);
	}
}