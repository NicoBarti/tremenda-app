import { TestBed, inject } from '@angular/core/testing';

import { ContadortragosService } from './contadortragos.service';

describe('ContadortragosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContadortragosService]
    });
  });

  it('should be created', inject([ContadortragosService], (service: ContadortragosService) => {
    expect(service).toBeTruthy();
  }));
});
