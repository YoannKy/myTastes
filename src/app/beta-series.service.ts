import { Injectable } from '@angular/core';
import { MoviesService} from './movies/services/movies.service';
import { Movie } from './movies/model/movie';
import { BETA_SERIES } from './config/betaService';

@Injectable()
export class BetaSeriesService {
  protected baseUrl: string;
  protected apiKey: string;
  protected apiVersion: string;

  constructor() {
    this.baseUrl = BETA_SERIES.baseUrl;
    this.apiKey = BETA_SERIES.apiKey;
    this.apiVersion = BETA_SERIES.apiVersion;
  }
}
