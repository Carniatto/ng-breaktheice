import { TestBed, inject } from '@angular/core/testing';

import { RestModelService } from './rest-model.service';

describe('RestModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestModelService]
    });
  });

  it('should be created', inject([RestModelService], (service: RestModelService) => {
    expect(service).toBeTruthy();
  }));
});
