import {Injectable, ReflectiveInjector} from '@angular/core';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  ResponseOptions,
  ConnectionBackend,
  RequestOptions,
} from "@angular/http";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Movie } from '../model/movie';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
     {provide: ConnectionBackend, useClass: MockBackend},
     {provide: RequestOptions, useClass: BaseRequestOptions},
     Http,
     MoviesService,
   ]);
   this.moviesService = this.injector.get(MoviesService);
   this.backend = this.injector.get(ConnectionBackend) as MockBackend;
   this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should return a PromiseMovie[]>',
  fakeAsync(()=> {
    let movies: Movie[];
    const mockResponse = {
      movies: [
        { id: 0, title: 'Movie 1' },
        { id: 1, title: 'Movie 2' },
      ]
    };

    this.moviesService.getMovies("").then((movies: Movie[]) => movies = movies);

    this.lastConnection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse),
    })));

    tick();

    expect(movies.length).toBe(2);
    expect(movies[0].title).toEqual('Movie 1');
    expect(movies[1].title).toEqual('Movie 2');
  }));

  // it('should return a Promise<MovieDetails>',
  // fakeAsync(()=> {
  //   const mockResponse = {
  //        id: 0, title: 'Movie 1'
  //   };
  //
  //   backend.connections.subscribe((connection) => {
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body: JSON.stringify(mockResponse)
  //     })));
  //   });
  //
  //   moviesService.getMovie(1).then((movie) => {
  //     expect(movie.title).toEqual('Movie 1');
  //     expect(movie.id).toEqual('0');
  //   });
  // }));
});
