import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Trago } from './trago'
import { LISTA_TRAGOS } from './lista_tragos'

@Injectable({
  providedIn: 'root'
})
export class ContadortragosService {

  lista_tragos = LISTA_TRAGOS
  calculoTragos: number

  private tragos_totales = new Subject<number>();
  // this.tragos_totales.last()
  tragos_totales$ = this.tragos_totales.asObservable()

  constructor() { }

  get_lista_tragos(): Observable<Trago[]> {
    return of(this.lista_tragos)
  }

  ceroTragos(): void {
    let i: any;
    for(i in this.lista_tragos){this.lista_tragos[i].cant = 0}
  }

  suma(indx: number): void {
  this.lista_tragos[indx].cant++
  this.calculaTragos()
  }

  resta(indx: number): void {
    if (this.lista_tragos[indx].cant == 0 ){return}
    else {this.lista_tragos[indx].cant--;
      this.calculaTragos()
    }
  }

  calculaTragos(): void {
    let i: any;
    this.calculoTragos = 0
    for(i in this.lista_tragos){
    this.calculoTragos = this.calculoTragos + (this.lista_tragos[i].cant * this.lista_tragos[i].eq);
      }
      this.tragos_totales.next(this.calculoTragos)
  }

}
