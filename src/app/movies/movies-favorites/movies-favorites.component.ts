import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-favorites',
  templateUrl: './movies-favorites.component.html',
  styleUrls: ['./movies-favorites.component.css'],
  providers: [MoviesService]
})
export class MoviesFavoritesComponent implements OnInit {
  movies: Movie[];
  constructor(
    private moviesService: MoviesService
  ) {}

  getFavoriteMovies(): void {
    this.moviesService
    .getFavoriteMovies()
    .then((movies) => {
      this.movies = movies;
    });
  };
  ngOnInit() {
    this.getFavoriteMovies();
  }

}
