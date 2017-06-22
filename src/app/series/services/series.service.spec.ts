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
import { SeriesService } from './series.service';
import { BETA_SERIES } from '../../config/betaService';

describe('SeriesService', () => {
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [
        SeriesService,
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
        inject([SeriesService], (serieService: SeriesService) => {

        const mockResponse = {
          data: [
            { id: 0, title: 'Serie 1' },
            { id: 1, title: 'Serie 2' },
          ]
        };

        backend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        serieService.getSeries(1).then((series) => {
          expect(series.length).toBe(2);
          expect(series[0].title).toEqual('Serie 1');
          expect(series[1].title).toEqual('Serie 2');
        });

    }));

  it('should return a Promise<SerieDetails>'),
  inject([SeriesService], (serieService: SeriesService) => {

    const mockResponse = {
         id: 0, title: 'Serie 1'
    };

    backend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    serieService.getSerie(1).then((serie) => {
      expect(serie.title).toEqual('Serie 1');
      expect(serie.id).toEqual('0');
    });
  });

});
