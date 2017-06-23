import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApiRoutingModule } from './auth-api-routing.module';
import { AuthApiComponent } from './auth-api.component';
import { RedirectAuthApiComponent } from './redirect-auth-api/redirect-auth-api.component';

@NgModule({
  imports: [
    CommonModule,
    AuthApiRoutingModule
  ],
  declarations: [AuthApiComponent, RedirectAuthApiComponent]
})
export class AuthApiModule { }
