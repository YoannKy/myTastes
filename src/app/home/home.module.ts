import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { MoviesService } from '../movies/services/movies.service';
import {SeriesService} from '../series/services/series.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [MoviesService, SeriesService],
  declarations: [HomeComponent]
})
export class HomeModule {
}
