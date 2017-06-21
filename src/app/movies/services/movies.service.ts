import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { BetaSeriesService } from '../../beta-series.service';
import { Movie } from '../model/movie';
import 'rxjs/add/operator/toPromise';
import { BETA_SERIES } from '../../config/betaService';

@Injectable()
export class MoviesService extends BetaSeriesService {
  constructor(private http: Http) {
    super();
  }

  getMovies(): Promise<Movie[]> {
    let getMoviesUrl = `${this.baseUrl}${BETA_SERIES.movies.list}?v=${this.apiVersion}&key=${this.apiKey}`;
    return this.http.get(getMoviesUrl)
           .toPromise()
           .then(response => response.json().movies as Movie[])
           .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
