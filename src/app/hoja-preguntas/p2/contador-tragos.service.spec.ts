import { TestBed } from '@angular/core/testing';

import { ContadorTragosService } from './contador-tragos.service';

describe('ContadorTragosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContadorTragosService = TestBed.get(ContadorTragosService);
    expect(service).toBeTruthy();
  });
});
