import { TestBed, inject } from '@angular/core/testing';

import { BetaSeriesService } from './beta-series.service';

describe('BetaSeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetaSeriesService]
    });
  });

  it('should be created', inject([BetaSeriesService], (service: BetaSeriesService) => {
    expect(service).toBeTruthy();
  }));
});
