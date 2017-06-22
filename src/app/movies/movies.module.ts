import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HttpModule } from '@angular/http';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

import { MaterializeModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpModule,
    MaterializeModule.forRoot()
  ],
  declarations: [MoviesComponent, MoviesDetailComponent]
})
export class MoviesModule { }
