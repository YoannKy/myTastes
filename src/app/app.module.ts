import { BrowserModule } from '@angular/platform-browser';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BetaSeriesService} from './beta-series.service';

import { HomeModule } from './home/home.module';
import { CallbackModule } from './callback/callback.module';

import { AuthService } from './auth/services/auth.service';

import { MaterializeModule } from 'ng2-materialize';

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
