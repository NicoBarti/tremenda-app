import { Injectable } from '@angular/core';
import { PuntajesAudit } from './puntajes-audit'
import { Usuario } from '../auth/usuario/usuario'
import { ServerService } from '../server/server.service'

import {ContadorTragosService} from '../hoja-preguntas/p2/contador-tragos.service'

@Injectable({
  providedIn: 'root'
})
export class AlmecenResultadosService {

  constructor(
    private server: ServerService,
    private contadorTragosService: ContadorTragosService
  ) { }

usuario: Usuario
audit: PuntajesAudit[] = []
item: PuntajesAudit
secuencia: number = 0


guardaUsuario(info:Usuario):void{
  this.usuario = info
  this.server.envia_usuario(this.usuario)
}

guardaItem(itemid:number, alt:number, tiempo:number):void{
  let secuencia = this.secuencia
  this.audit.push({itemid, alt, tiempo, secuencia})
  this.item = {
    itemid: itemid,
    alt: alt,
    tiempo: tiempo,
    secuencia: secuencia
  }
  this.server.envia_item(this.item)
  this.secuencia++
  return
}

get_alternativa(n){
let secuencia = this.secuencia
let itemActual = this.audit.filter(respuesta=> respuesta.itemid === n)
if (!itemActual || !itemActual.length){return}

  for (var i = 0; i < this.audit.length +1; i++) {
    var x = itemActual.filter(item=> item.secuencia == secuencia)
    if(x.length == 1){
      return x[0].alt}
  secuencia--
  }
}

reseteaAlmacen():void {
 this.usuario = undefined;
 this.audit = [];
 this.item = undefined;
 this.secuencia = 0;
 this.contadorTragosService.resetea()
}

}
