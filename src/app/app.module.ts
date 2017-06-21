import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CallbackHttpService } from './callback-http.service';
import { AppComponent } from './app.component';
import { AuthApiComponent } from './auth-api/auth-api.component';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { RedirectAuthApiComponent } from './redirect-auth-api/redirect-auth-api.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthApiComponent,
    RedirectAuthApiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
	  {
	    path: 'login-api',
	    component: AuthApiComponent
	  },
	  {
	    path: 'redirect',
	    component: RedirectAuthApiComponent
	  },
	  {
	    path: '',
	    redirectTo: '/login-api',
	    pathMatch: 'full'
	  }
    ])
  ],
  providers: [CallbackHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
