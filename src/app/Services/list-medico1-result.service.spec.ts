import { TestBed } from '@angular/core/testing';

import { ListMedico1ResultService } from './list-medico1-result.service';

describe('ListMedico1ResultService', () => {
  let service: ListMedico1ResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMedico1ResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
