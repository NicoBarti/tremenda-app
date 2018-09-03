import { Injectable } from '@angular/core';
import { Trago} from '../mide/trago'
import { AuditC} from './auditc'

@Injectable({
  providedIn: 'root'
})
export class PerfilConsumoService {

  auditC: AuditC[] = []
  tragos: Trago[] = []
  existePerfil: boolean = false
  puntaje:number

  constructor() { }

  set_perfil_consumo(auditC: AuditC, tragos: Trago[]): void {
    Object.assign(this.tragos, tragos)
    Object.assign(this.auditC, auditC)
    this.puntaje = this.auditC['item1'] + this.auditC['item2'] + this.auditC['item3']
    this.existePerfil = true
  }

  get_perfil_consumo() {
    return { auditC: this.auditC, tragos: this.tragos}
  }

  get_existePerfil():boolean {
    return this.existePerfil
  }

  get_riesgo():string {
    if(this.puntaje == 0){return 'cero'}
    else if(this.puntaje < 5){return 'bajo'}
    else if(this.puntaje <9){return 'medio'}
    else if(this.puntaje >8){return 'alto'}
  }

}
