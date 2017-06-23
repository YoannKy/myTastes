import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieDetails } from '../model/movieDetails';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
  providers: [MoviesService]
})
export class MoviesDetailComponent implements OnInit {
  movie: MovieDetails;
  betaSeriesToken: string;
  isConnectedToBetaSeries: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.betaSeriesToken = localStorage.getItem('access_token_api');
    this.isConnectedToBetaSeries = this.betaSeriesToken !== null;
    this.route.params
      .switchMap((params: Params) => this.moviesService.getMovie(+params['id'], this.betaSeriesToken))
      .subscribe(movie => {this.movie = movie;});
  }

  addFavorite(id: string) {
    this.moviesService.postToSeeMovie(id);
    this.movie.user.favorited = true;
  }
}
