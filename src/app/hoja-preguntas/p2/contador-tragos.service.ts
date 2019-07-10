import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Trago } from '../cuestionario/trago'
import { LISTA_TRAGOS } from '../cuestionario/lista_tragos'
// import { AlmecenResultadosService} from '../../datos/almecen-resultados.service'

@Injectable({
  providedIn: 'root'
})
export class ContadorTragosService {

  lista_tragos = LISTA_TRAGOS
  calculoTragos: number

  private cambios_lista = new Subject<number[]>();
  cambios_lista_trago$ = this.cambios_lista.asObservable()

  private tragos_totales = new Subject<number>();
  tragos_totales$ = this.tragos_totales.asObservable()

  constructor(
    // private almacen: AlmecenResultadosService
  ) { }

  get_lista_tragos$(): Observable<Trago[]> {
    return of(this.lista_tragos)
  }

  // get_lista_tragos():Trago[] {
  //   return this.lista_tragos
  // }

  get_calculoTragos():number{
    return this.calculoTragos
  }

  ceroTragos(): void {
    let i: any;
    for(i in this.lista_tragos){this.lista_tragos[i].cant = 0}
  }

  suma(indx: number): void {
  this.lista_tragos[indx].cant++
  this.calculaTragos()
  this.cambios_lista.next([indx, this.lista_tragos[indx].cant])
  }

  resta(indx: number): void {
    if (this.lista_tragos[indx].cant == 0 || this.lista_tragos[indx].cant == null){return}
    else {this.lista_tragos[indx].cant--;
      this.calculaTragos()
    }
  }

  set_cero_index(indx: number):void {
    this.lista_tragos[indx].cant = 0;
    this.calculaTragos();
  }

  calculaTragos(): void {
    let i: any;
    this.calculoTragos = 0
    for(i in this.lista_tragos){
    this.calculoTragos = this.calculoTragos + (this.lista_tragos[i].cant * this.lista_tragos[i].eq);
      }
      this.tragos_totales.next(this.calculoTragos)
  }

  resetea():void{
    var i
    for( i = 0; i < this.lista_tragos.length; i++){
          this.lista_tragos[i].cant = null}

    this.tragos_totales.next(null)
  }
}
