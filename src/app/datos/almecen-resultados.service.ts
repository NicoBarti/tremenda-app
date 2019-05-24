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

guardaUsuario(info:Usuario):void{
  this.usuario = info
}

//Guarda alternativa seleccionada más el id de cada pregunta para un usuario definido arriba
guardaItem(itemId:string, alt:string,):void{
  this.audit.push({itemId, alt})
  let d = new Date()
  console.log(d.getTime())
  // console.log(Date.getTime())
}

}
