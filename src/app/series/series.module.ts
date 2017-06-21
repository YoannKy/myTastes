import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [
    CommonModule,
    SeriesRoutingModule,
    HttpModule
  ],
  declarations: [SeriesComponent]
})
export class SeriesModule { }
