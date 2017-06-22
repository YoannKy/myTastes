import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BETA_SERIES } from '../../config/betaService';
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
	  urlParams.append('client_id', BETA_SERIES.apiKey);
	  urlParams.append('client_secret', BETA_SERIES.apiAuth.secretKey);
	  urlParams.append('redirect_uri', BETA_SERIES.apiAuth.redirectUrl);
	  urlParams.append('code', code);
	  return urlParams;
	}

	postAccessToken(code: string) {
	  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      let options = new RequestOptions({ headers: headers });
      let urlParams = this.preparePostParameters(code);

	  return this.http
	    .post(BETA_SERIES.apiAuth.accessTokenUrl, urlParams, options)
	    .toPromise()
	    .then(res => this.saveAccessToken(res))
	    .catch(this.handleError);
	}
}