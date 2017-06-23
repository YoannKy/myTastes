import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/services/auth.service';
import { MoviesService } from '../movies/services/movies.service';
import { MovieDetails } from '../movies/model/movieDetails';
import { SeriesService } from '../series/services/series.service';
import { SerieDetails } from '../series/model/serieDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: string;
  movie: MovieDetails;
  serie: SerieDetails;
  loading: boolean = true;

  constructor(public auth: AuthService, private moviesService: MoviesService, private seriesService: SeriesService) { }

  ngOnInit() {
    this.getMovieRandom();
    this.getRandomSerie();
  }

  getRandomSerie(): void {
    this.loading = true;
    this.seriesService
      .getRandomSerie()
      .then((serie) => {
        this.serie = serie[0];
        this.loading = false;
      });
  };

  getMovieRandom(): void {
    this.loading = true;
    this.moviesService
      .getMovieRandom()
      .then((movie) => {
        this.movie = movie[0];
        this.loading = false;
      });
  };
}
