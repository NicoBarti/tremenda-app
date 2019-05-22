import { Injectable } from '@angular/core';
import { Preguntas } from './preguntas'

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  constructor() { }

 auditItems:Preguntas[] = [
    {id: 1,
    texto: '¿Con qué frecuencia ha consumido alguna bebida que contenía alcohol durante los últimos 12 meses?',
    a1: 'Nunca',
    a2: 'Menos de una vez al mes',
    a3: 'Mensualmente',
    a4: 'Semanelmente',
    a5: 'Diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 2,
    texto: '¿Cuántos tragos de alcohol suele tomar un día normal?',
    a1: '1 o 2',
    a2: '3 o 4',
    a3: '5 o 6',
    a4: '7 ,8 ,9',
    a5: '10 o más',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    }
 ]


get_auditPregunta(secuencia:any):string{
  return this.auditItems[secuencia].texto
}

get_auditAlternativas(secuencia:number):any[]{
  console.log(secuencia)
  let alternativas:any[] = []
  alternativas[0] = {a: this.auditItems[secuencia].a1, p: this.auditItems[secuencia].p1}
  alternativas[1] = {a: this.auditItems[secuencia].a2, p: this.auditItems[secuencia].p2}
  alternativas[2] = {a: this.auditItems[secuencia].a3, p: this.auditItems[secuencia].p3}
  alternativas[3] = {a: this.auditItems[secuencia].a4, p: this.auditItems[secuencia].p4}
  alternativas[4] = {a: this.auditItems[secuencia].a5, p: this.auditItems[secuencia].p5}
  return alternativas
}

}
