import { TestBed, inject } from '@angular/core/testing';

import { PerfilConsumoService } from './perfil-consumo.service';

describe('PerfilConsumoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfilConsumoService]
    });
  });

  it('should be created', inject([PerfilConsumoService], (service: PerfilConsumoService) => {
    expect(service).toBeTruthy();
  }));
});
