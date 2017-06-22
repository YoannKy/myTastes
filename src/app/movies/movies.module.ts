import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HttpModule } from '@angular/http';
import { MoviesRoutingModule } from './movies-routing.module';
import { RandomMoviesComponent } from './random-movies/random-movies.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpModule
  ],
  declarations: [MoviesComponent, RandomMoviesComponent]
})
export class MoviesModule { }
