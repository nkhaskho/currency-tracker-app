import { TestBed } from '@angular/core/testing';

import { CoingeckoService } from './coingecko-service';

describe('CoingeckoServiceService', () => {
  let service: CoingeckoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoingeckoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
