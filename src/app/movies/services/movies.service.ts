import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule, Response,  RequestOptions, URLSearchParams  } from '@angular/http';
import { BetaSeriesService } from '../../beta-series.service';
import { Movie } from '../model/movie';
import 'rxjs/add/operator/toPromise';
import { BETA_SERIES } from '../../config/betaService';
import {MovieDetails} from '../model/movieDetails';

@Injectable()
export class MoviesService extends BetaSeriesService {
  constructor(private http: Http) {
    super();
  }

  getMovies(params): Promise<Movie[]> {
    let getMoviesUrl = `${this.baseUrl}${BETA_SERIES.movies.list}?v=${this.apiVersion}&key=${this.apiKey}&page=${params.page}&nbpp=${params.limit}&title=${params.title}`;
    return this.http.get(getMoviesUrl)
           .toPromise()
           .then(response => response.json().movies as Movie[])
           .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getMovie(id: number): Promise<MovieDetails> {
    let getMovieUrl = `${this.baseUrl}${BETA_SERIES.movies.show}?v=${this.apiVersion}&key=${this.apiKey}&id=${id}`;
    return this.http.get(getMovieUrl)
      .toPromise()
      .then(response => response.json().movie as Movie)
      .catch(this.handleError);
  }

  private preparePostParameters(id: string)
  {
    let urlParams = new URLSearchParams();
    console.log(BETA_SERIES.apiKey);
    urlParams.append('key', BETA_SERIES.apiKey);
    urlParams.append('access_token', localStorage.getItem('access_token_api'));
    urlParams.append('id', id);
    return urlParams;
  }

  postFavoriteMovie(id: string) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let options = new RequestOptions({headers: headers});
    let urlParams = this.preparePostParameters(id);
    let postFavoriteMovieUrl = `${this.baseUrl}${BETA_SERIES.movies.postFavorite}`;
    return this.http
        .post(postFavoriteMovieUrl, urlParams, options)
        .toPromise()
        .then()
        .catch(this.handleError);
  }

    postToSeeMovie(id: string) {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      let options = new RequestOptions({ headers: headers });
      let urlParams = this.preparePostParameters(id);
      let postFavoriteMovieUrl = `${this.baseUrl}${BETA_SERIES.movies.postToSee}`;
      return this.http
          .post(postFavoriteMovieUrl, urlParams, options)
          .toPromise()
          .then()
          .catch(this.handleError);
    }
}
