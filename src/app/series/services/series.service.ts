import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { BetaSeriesService } from '../../beta-series.service';
import { Serie } from '../model/serie';
import 'rxjs/add/operator/toPromise';
import { BETA_SERIES } from '../../config/betaService';

@Injectable()
export class SeriesService extends BetaSeriesService {

  constructor(private http: Http) {
    super();
  }

  getSeries(): Promise<Serie[]> {
    const getSeriesUrl = `${this.baseUrl}${BETA_SERIES.series.list}?v=${this.apiVersion}&key=${this.apiKey}&limit=300`;
    return this.http.get(getSeriesUrl)
      .toPromise()
      .then(response => response.json().shows as Serie[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
