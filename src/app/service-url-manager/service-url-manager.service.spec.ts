import { TestBed, inject } from '@angular/core/testing';

import { ServiceUrlManagerService } from './service-url-manager.service';

describe('ServiceUrlManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUrlManagerService]
    });
  });

  it('should be created', inject([ServiceUrlManagerService], (service: ServiceUrlManagerService) => {
    expect(service).toBeTruthy();
  }));
});
