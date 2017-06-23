import { BrowserModule } from '@angular/platform-browser';
import { AuthApiModule } from './auth-api/auth-api.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CallbackHttpService} from './auth-api/services/callback-http.service';
import { MaterializeModule } from 'ng2-materialize';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { HomeModule } from './home/home.module';
import { CallbackModule } from './callback/callback.module';
import { AuthService } from './auth/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    AuthApiModule,
    SeriesModule,
    HomeModule,
    CallbackModule,
    MaterializeModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthService, CallbackHttpService],
  bootstrap: [AppComponent]
  })
export class AppModule { }
