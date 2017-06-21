import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MoviesModule } from './movies/movies.module';
import { HomeModule } from './home/home.module';
import { CallbackModule } from './callback/callback.module';

import { AuthService } from './auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    HomeModule,
    CallbackModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
