import { TestBed } from '@angular/core/testing';

import { SecuenciadorService } from './secuenciador.service';

describe('SecuenciadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecuenciadorService = TestBed.get(SecuenciadorService);
    expect(service).toBeTruthy();
  });
});
