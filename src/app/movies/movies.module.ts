import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HttpModule } from '@angular/http';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpModule
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
