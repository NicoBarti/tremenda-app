import { Injectable } from '@angular/core';
import { PuntajesAudit } from './puntajes-audit'
import { Usuario } from '../auth/usuario/usuario'

@Injectable({
  providedIn: 'root'
})
export class AlmecenResultadosService {

  constructor() { }

usuario: Usuario
audit: PuntajesAudit[] = []
secuencia_almacen: number = 0

guardaUsuario(info:Usuario):void{
  this.usuario = info
}

guardaItem(itemId:number, alt:number, tiempo:number):void{
  let secuencia_almacen = this.secuencia_almacen
  this.audit.push({itemId, alt, tiempo, secuencia_almacen})
  this.secuencia_almacen++
  return
}

get_alternativa(n){
let secuencia_almacen = this.secuencia_almacen
let itemActual = this.audit.filter(respuesta=> respuesta.itemId === n)
if (!itemActual || !itemActual.length){return}

for (var i = 0; i < this.audit.length +1; i++) {
  var x = itemActual.filter(item=> item.secuencia_almacen == secuencia_almacen)
  if(x.length == 1){
    return x[0].alt}
secuencia_almacen--
}

}
}
