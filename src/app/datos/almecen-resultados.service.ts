import { Injectable, OnDestroy } from '@angular/core';
import { PuntajesAudit } from './puntajes-audit'
import { Usuario } from '../auth/usuario/usuario'
import { ServerService } from '../server/server.service'
import { Trago} from '../hoja-preguntas/cuestionario/trago'
import { Subscription }   from 'rxjs';
import { LISTA_TRAGOS } from '../hoja-preguntas/cuestionario/lista_tragos'
import {CuestionarioService} from '../hoja-preguntas/cuestionario/cuestionario.service'


import {ContadorTragosService} from '../hoja-preguntas/p2/contador-tragos.service'

@Injectable({
  providedIn: 'root'
})
export class AlmecenResultadosService {

  constructor(
    private server: ServerService,
    private contadorTragosService: ContadorTragosService,
    private cuestionarioService: CuestionarioService,

  ) {
    this.subscription = this.contadorTragosService.cambios_lista_trago$.
      subscribe(datos => {
        // console.log(this.lista[datos[0]].cant)
        this.lista[datos[0]].cant = datos[1]
        // this.lista_tragos[datos[0]]
      // this.lista_tragos[datos[0]].cant = datos[1])
      // console.log(this.lista)
    })
  }


usuario: Usuario
audit: PuntajesAudit[] = []
item: PuntajesAudit
secuencia: number = 0
lista: Trago[] = LISTA_TRAGOS
subscription: Subscription

guardaUsuario(info:Usuario):void{
  this.usuario = info
  this.server.envia_usuario(this.usuario)
}

ngOnDestroy(){
  this.subscription.unsubscribe()
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
  // console.log(this.)
  return
}

// guardaLista_tragos(lista_tragos):void {
//   this.lista_tragos = lista_tragos
// }

get_alternativa(n){
let nOrdenado = this.cuestionarioService.get_itemid(n)
let secuencia = this.secuencia
let itemActual = this.audit.filter(respuesta=> respuesta.itemid === nOrdenado)
// let itemActual = this.audit.filter(respuesta=> respuesta.orden === n)

if (!itemActual || !itemActual.length){return}

  for (var i = 0; i < this.audit.length +1; i++) {
    var x = itemActual.filter(item=> item.secuencia == secuencia)
    if(x.length == 1){
      return x[0].alt}
  secuencia--
  }
}
//
// get_alternativa_anterior(n){
// let secuencia = this.secuencia
// let itemActual = this.audit.filter(respuesta=> respuesta.itemid === n-1)
// if (!itemActual || !itemActual.length){return}
//
//   for (var i = 0; i < this.audit.length +1; i++) {
//     var x = itemActual.filter(item=> item.secuencia == secuencia)
//     if(x.length == 1){
//       return(x[0].alt)
//     }
//   secuencia--
//   }
// }

envia_listatragos():void{
  this.server.enviaP2detalle(this.lista)
}

reseteaAlmacen():void {

  this.audit = [];
  this.item = undefined;
  this.secuencia = 0;
  this.contadorTragosService.resetea()

}

}
