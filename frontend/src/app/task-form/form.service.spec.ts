import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';

describe('FormInitializationService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
