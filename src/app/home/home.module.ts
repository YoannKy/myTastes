import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { MoviesService } from '../movies/services/movies.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [MoviesService],
  declarations: [HomeComponent]
})
export class HomeModule {
}
