import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { movieDetail } from '../model/movieDetail';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
