import { TestBed, inject } from '@angular/core/testing';

import { ServiceBaseService } from './service-base.service';

describe('ServiceBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceBaseService]
    });
  });

  it('should be created', inject([ServiceBaseService], (service: ServiceBaseService) => {
    expect(service).toBeTruthy();
  }));
});
