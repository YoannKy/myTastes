import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule, Response, RequestOptions, URLSearchParams } from '@angular/http';
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

  getSerie(id: number, access_token: string): Promise<SerieDetails> {
    let getSerieUrl = `${this.baseUrl}${BETA_SERIES.series.show}?v=${this.apiVersion}&key=${this.apiKey}&id=${id}&access_token=${access_token}`;
    return this.http.get(getSerieUrl)
      .toPromise()
      .then(response => response.json().show as Serie)
      .catch(this.handleError);
  }

  getFavoriteSeries(): Promise<Serie[]> {
    let getFavoriteSeriesUrl = `${this.baseUrl}${BETA_SERIES.series.favorites}?v=${this.apiVersion}&key=${this.apiKey}&access_token=${localStorage.getItem('access_token_api')}`;
    return this.http.get(getFavoriteSeriesUrl)
        .toPromise()
        .then(response => response.json().shows as Serie[])
        .catch(this.handleError);
  }

  private preparePostParameters(id: string)
  {
    let urlParams = new URLSearchParams();
    urlParams.append('key', BETA_SERIES.apiKey);
    urlParams.append('access_token', localStorage.getItem('access_token_api'));
    urlParams.append('id', id);
    return urlParams;
  }

  postSerie(id: string) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let options = new RequestOptions({headers: headers});
    let urlParams = this.preparePostParameters(id);
    let postFavoriteMovieUrl = `${this.baseUrl}${BETA_SERIES.series.postShow}`;
    return this.http
        .post(postFavoriteMovieUrl, urlParams, options)
        .toPromise()
        .then(() => this.postFavoriteSerie(id))
        .catch(this.handleError);
  }

  postFavoriteSerie(id: string) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let options = new RequestOptions({headers: headers});
    let urlParams = this.preparePostParameters(id);
    let postFavoriteMovieUrl = `${this.baseUrl}${BETA_SERIES.series.postFavorite}`;
    return this.http
        .post(postFavoriteMovieUrl, urlParams, options)
        .toPromise()
        .then()
        .catch(this.handleError);
  }
}
