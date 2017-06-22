import { TestBed, inject } from '@angular/core/testing';
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from "@angular/http";
import { MockBackend } from '@angular/http/testing';
import { MoviesService } from './movies.service';
import { BETA_SERIES } from '../../config/betaService';

describe('MoviesService', () => {
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [
        MoviesService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    backend = TestBed.get(MockBackend);
  });

  it('should return a PromiseMovie[]>',
        inject([MoviesService], (moviesService: MoviesService) => {

        const mockResponse = {
          data: [
            { id: 0, title: 'Movie 1' },
            { id: 1, title: 'Movie 2' },
          ]
        };

        backend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        moviesService.getMovies(1).then((movies) => {
          expect(movies.length).toBe(2);
          expect(movies[0].title).toEqual('Movie 1');
          expect(movies[1].title).toEqual('Movie 2');
        });

    }));

  it('should return a Promise<MovieDetails>'),
  inject([MoviesService], (moviesService: MoviesService) => {

    const mockResponse = {
         id: 0, title: 'Movie 1'
    };

    backend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    moviesService.getMovie(1).then((movie) => {
      expect(movie.title).toEqual('Movie 1');
      expect(movie.id).toEqual('0');
    });
  });

});
