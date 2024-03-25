import { TestBed } from '@angular/core/testing';

import { DessinService } from './dessin.service';

describe('DessinService', () => {
  let service: DessinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DessinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
