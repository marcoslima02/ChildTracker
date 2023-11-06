import { TestBed } from '@angular/core/testing';

import { GeralService } from './geral.service';

describe('GeralService', () => {
  let service: GeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
