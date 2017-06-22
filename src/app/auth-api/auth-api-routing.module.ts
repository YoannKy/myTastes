import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectAuthApiComponent } from './redirect-auth-api/redirect-auth-api.component';

const routes: Routes = [
  {
    path: 'redirect',
    component: RedirectAuthApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthApiRoutingModule { }
