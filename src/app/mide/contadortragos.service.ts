import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Trago } from './trago'
import { LISTA_TRAGOS } from './lista_tragos'

@Injectable({
  providedIn: 'root'
})
export class ContadortragosService {

  lista_tragos = LISTA_TRAGOS

  constructor() { }

  get_lista_tragos(): Observable<Trago[]> {
    return of(this.lista_tragos)
  }

  suma(indx: number): void {
  this.lista_tragos[indx].cant++
  }

  resta(indx: number): void {
    if (this.lista_tragos[indx].cant == 0 ){return}
    else {this.lista_tragos[indx].cant--}
  }


}
