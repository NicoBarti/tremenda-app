import { Injectable } from '@angular/core';
import {PuntajesAudit} from '../datos/puntajes-audit'
import {AlmecenResultadosService} from '../datos/almecen-resultados.service'

@Injectable({
  providedIn: 'root'
})
export class SecuenciadorService {

  constructor(private almecenResultadosService: AlmecenResultadosService) {
   }

 avance:number
 max:number = 10

set_secuencia(n: any):void{
  this.avance = n
}

avanza(actual: number) {
  if(this.avance == this.max){return 'maximo'}
  this.avance = actual +1
}

retrocede(actual: number){
  if(this.avance == 0){return 'minimo'}
  this.avance = actual - 1
}

get_secuencia():number{
  return this.avance
}

graba_respuesta(itemId:number, alt:number, tiempo:number){
  this.almecenResultadosService.guardaItem(itemId, alt, tiempo)
}

}
