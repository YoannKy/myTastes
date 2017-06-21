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
  getMovies(): void {
      this.moviesService
      .getMovies()
      .then((movies) => {
        console.log(movies);
          this.movies = movies;
      });
  };
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
      this.getMovies();
  }

}
