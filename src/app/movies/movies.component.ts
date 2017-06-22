import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

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
  loading: boolean = true;
  page: number = 1;
  limit: number = 20;
  searchInput: string = '';
  searchInputControl = new FormControl();
  constructor(private moviesService: MoviesService) {
  }

  getMovies(): void {
    this.loading = true;
    this.moviesService
    .getMovies({page: this.page, limit: this.limit, title: this.searchInput})
    .then((movies) => {
      this.movies = movies;
      this.loading = false;
    });
  };

  pageUp(): void {
    this.page++;
    this.getMovies();
  }

  pageDown(): void {
    if(this.page >= 0) {
      this.page--;
      this.getMovies();
    }
  }

  ngOnInit() {
    this.getMovies();
    this.searchInputControl.valueChanges
      .debounceTime(500)
      .subscribe(newValue => {this.searchInput = newValue; this.getMovies()});
  }

}
