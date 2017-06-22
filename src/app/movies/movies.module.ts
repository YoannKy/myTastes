import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterializeModule } from 'ng2-materialize';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule.forRoot(),
    MoviesRoutingModule
  ],
  declarations: [MoviesComponent, MoviesDetailComponent]
})
export class MoviesModule { }
