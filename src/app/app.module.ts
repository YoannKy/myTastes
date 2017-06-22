import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'ng2-materialize';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { HomeModule } from './home/home.module';
import { CallbackModule } from './callback/callback.module';

import {BetaSeriesService} from './beta-series.service';
import { AuthService } from './auth/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    SeriesModule,
    HomeModule,
    CallbackModule,
    MaterializeModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
  })
export class AppModule { }
