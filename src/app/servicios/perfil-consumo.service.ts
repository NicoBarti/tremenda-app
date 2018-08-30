import { Injectable } from '@angular/core';
import { Trago} from '../mide/trago'
import { AuditC} from './auditc'

@Injectable({
  providedIn: 'root'
})
export class PerfilConsumoService {

  auditC: AuditC
  tragos: Trago[] = []


  constructor() { }

  set_perfil_consumo(auditC: AuditC, tragos: Trago[]): void {
    this.auditC = auditC
    this.tragos = tragos
    console.log('desde perfilConsumoService' + this.auditC + this.tragos)
  }

  get_perfil_consumo() {
    return this.auditC
  }

}
