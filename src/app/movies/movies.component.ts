import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { Movie } from './model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  start: number = 0;
  limit: number = 20;
  constructor(private moviesService: MoviesService) {
  }

  getMovies(): void {
    this.moviesService
    .getMovies({start: this.start, limit: this.limit})
    .then((movies) => {
      this.movies = movies;
    });
  };

  pageUp(): void {
    this.start += this.limit;
    this.getMovies();
  }

  pageDown(): void {
    if(this.start - this.limit >= 0) {
      this.start -= this.limit;
      this.getMovies();
    }
  }

  ngOnInit() {
      this.getMovies();
  }

}
