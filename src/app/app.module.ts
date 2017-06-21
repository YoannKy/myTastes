import { BrowserModule } from '@angular/platform-browser';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BetaSeriesService} from './beta-series.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    SeriesModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
