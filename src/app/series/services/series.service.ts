import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { BetaSeriesService } from '../../beta-series.service';
import { Serie } from '../model/serie';
import 'rxjs/add/operator/toPromise';
import { BETA_SERIES } from '../../config/betaService';
import {SerieDetails} from '../model/serieDetails';

@Injectable()
export class SeriesService extends BetaSeriesService {

  constructor(private http: Http) {
    super();
  }

  getSeries(params): Promise<Serie[]> {
    const getSeriesUrl = `${this.baseUrl}${BETA_SERIES.series.list}?v=${this.apiVersion}&key=${this.apiKey}&page=${params.page}&nbpp=${params.limit}&title=${params.title}`;
    return this.http.get(getSeriesUrl)
      .toPromise()
      .then(response => response.json().shows as Serie[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getSerie(id: number): Promise<SerieDetails> {
    let getSerieUrl = `${this.baseUrl}${BETA_SERIES.series.show}?v=${this.apiVersion}&key=${this.apiKey}&id=${id}`;
    return this.http.get(getSerieUrl)
      .toPromise()
      .then(response => response.json().show as Serie)
      .catch(this.handleError);
  }
}
