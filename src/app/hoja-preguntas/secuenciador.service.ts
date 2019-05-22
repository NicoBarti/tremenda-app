import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecuenciadorService {

  constructor() { }

 avance:number
 max:number = 10

set_secuencia(n: any):void{
  this.avance = n
}

avanza(actual: number):string {
  if(this.avance == this.max){return 'maximo'}
  this.avance = actual +1
  return 'ok'
}

retrocede(actual: number):string{
  if(this.avance == 0){return 'minimo'}
  this.avance = actual - 1
  return 'ok'
}

get_secuencia():number{
  return this.avance
}

}
