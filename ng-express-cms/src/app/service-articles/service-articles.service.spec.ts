import { TestBed, inject } from '@angular/core/testing';

import { ServiceArticlesService } from './service-articles.service';

describe('ServiceArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceArticlesService]
    });
  });

  it('should be created', inject([ServiceArticlesService], (service: ServiceArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
