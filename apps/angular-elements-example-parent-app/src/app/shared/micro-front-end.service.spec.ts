import { TestBed } from '@angular/core/testing';

import { MicroFrontEndService } from './micro-front-end.service';

describe('MicroFrontEndService', () => {
  let service: MicroFrontEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroFrontEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
