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
    a2: '1 o menos veces al mes',
    a3: 'De 2 a 4 veces al mes',
    a4: 'De 2 a 3 veces a la semana',
    a5: '4 o más veces a la semana',
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
    },
    {id: 3,
    texto: '¿Con qué frecuencia ha tomado 5 o más tragos en una ocasión durante el último año ?',
    a1: 'Nunca',
    a2: 'Menos de una vez al mes',
    a3: 'Mensualmente',
    a4: 'Semanelmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 4,
    texto: 'En el curso del último año, ¿Con qué frecuencia ha sido incapaz de parar de beber una vez que había empezado?',
    a1: 'Nunca',
    a2: 'Menos de una vez al mes',
    a3: 'Mensualmente',
    a4: 'Semanelmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 5,
    texto: 'En el curso del último año, ¿Con qué frecuencia no pudo hacer lo que se esperaba de usted porque había bebido?',
    a1: 'Nunca',
    a2: 'Menos de una vez al mes',
    a3: 'Mensualmente',
    a4: 'Semanelmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 6,
    texto: 'En el curso del último año, ¿Con qué frecuencia ha necesitado beber en ayunas para recuperarse después de haber bebido mucho el día anterior?',
    a1: 'Nunca',
    a2: 'Menos de una vez al mes',
    a3: 'Mensualmente',
    a4: 'Semanelmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 7,
    texto: 'En el curso del último año, ¿Con qué frecuencia ha tenido remordimientos o sentimientos de culpa después de haber bebido?',
    a1: 'Nunca',
    a2: 'Menos de una vez al mes',
    a3: 'Mensualmente',
    a4: 'Semanelmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 8,
    texto: 'En el curso del último año, ¿Con qué frecuencia no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?',
    a1: 'Nunca',
    a2: 'Menos de una vez al mes',
    a3: 'Mensualmente',
    a4: 'Semanelmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 9,
    texto: 'Alguna vez en la vida, ¿Usted o alguna otra persona ha resultado herido porque usted había bebido?',
    a1: 'Nunca',
    a2: 'Sí, pero no el curso del último año',
    a3: 'Sí, durante el último año',
    a4: undefined,
    a5: undefined,
    p1: 0,
    p2: 2,
    p3: 4,
    p4: undefined,
    p5: undefined
    },
    {id: 10,
    texto: 'Alguna vez en la vida ¿Algún familiar, amigo, médico o profesional de la salud ha mostrado preocupación por su consumo de bebidas alcohólicas o le han sugerido que deje de beber?',
    a1: 'Nunca',
    a2: 'Sí, pero no el curso del último año',
    a3: 'Sí, durante el último año',
    a4: undefined,
    a5: undefined,
    p1: 0,
    p2: 2,
    p3: 4,
    p4: undefined,
    p5: undefined
    }
 ]


get_auditPregunta(secuencia:any):string{
  return this.auditItems[secuencia].texto
}

get_auditAlternativas(secuencia:number):any[]{
  let alternativas:any[] = []
if(this.auditItems[secuencia].a5 === undefined){
  alternativas[0] = {a: this.auditItems[secuencia].a1, p: this.auditItems[secuencia].p1}
  alternativas[1] = {a: this.auditItems[secuencia].a2, p: this.auditItems[secuencia].p2}
  alternativas[2] = {a: this.auditItems[secuencia].a3, p: this.auditItems[secuencia].p3}
  return alternativas
  }
  alternativas[0] = {a: this.auditItems[secuencia].a1, p: this.auditItems[secuencia].p1}
  alternativas[1] = {a: this.auditItems[secuencia].a2, p: this.auditItems[secuencia].p2}
  alternativas[2] = {a: this.auditItems[secuencia].a3, p: this.auditItems[secuencia].p3}
  alternativas[3] = {a: this.auditItems[secuencia].a4, p: this.auditItems[secuencia].p4}
  alternativas[4] = {a: this.auditItems[secuencia].a5, p: this.auditItems[secuencia].p5}
  return alternativas
}

}
