import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesFavoritesComponent } from './movies-favorites/movies-favorites.component';

const routes: Routes = [
  {
     path: 'movies',
     component: MoviesComponent,

  },
  {
     path: "movies/detail/:id",
     component: MoviesDetailComponent
   },
   {
      path: "movies/favorites",
      component: MoviesFavoritesComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
