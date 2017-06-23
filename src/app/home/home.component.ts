import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/services/auth.service';
import { MoviesService } from '../movies/services/movies.service';
import { Movie } from '../movies/model/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: string;
  movie: Movie;
  loading: boolean = true;

  constructor(public auth: AuthService, private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovieRandom();
  }

  getMovieRandom(): void {
    this.loading = true;
    this.moviesService
      .getMovieRandom()
      .then((movie) => {
        this.movie = movie[0];
        console.log(this.movie);
        this.loading = false;
      });
  };
}
