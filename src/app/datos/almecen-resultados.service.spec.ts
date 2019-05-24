import { TestBed } from '@angular/core/testing';

import { AlmecenResultadosService } from './almecen-resultados.service';

describe('AlmecenResultadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlmecenResultadosService = TestBed.get(AlmecenResultadosService);
    expect(service).toBeTruthy();
  });
});
