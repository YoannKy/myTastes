import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesFavoritesComponent } from './series-favorites/series-favorites.component';

const routes: Routes = [
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'series/detail/:id',
    component: SeriesDetailComponent
  },
  {
    path: "series/favorites",
    component: SeriesFavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
