import { Injectable } from '@angular/core';
import { Preguntas } from './preguntas'

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  constructor() { }


// Para agregar o quitar preguntas recordar:
// - crear un id para esa pregunta
// - cambiar la propiedad orden en todos los items de auditItems
// - cambiar el orden en que se muestra la pregunta p2 en hoja-preguntas modificando n == x en la linea de configuracion de P2Component
// - ajustar el numero de preguntas a mostrar en la funcion navega() de hoja-preguntas
// - cambiar el numero de preguntas en el html  cabezera
 auditItems:Preguntas[] = [
    {id: 1.0,
      orden: 1,
    texto: 'En los últimos 12 meses, ¿Con qué frecuencia ha bebido alcohol?',
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
    // {id: 2.1,
    //   orden: 2,
    // texto: '¿Cuántos tragos de alcohol suele beber en un día de consumo normal durante los últimos 12 meses?',
    // a1: '1 o 2',
    // a2: '3 o 4',
    // a3: '5 o 6',
    // a4: '7, 8 o 9',
    // a5: '10 o más',
    // p1: 0,
    // p2: 1,
    // p3: 2,
    // p4: 3,
    // p5: 4,
    // },
    {id: 2.0,
      orden: 2,
    texto: 'Basándose en las siguientes imágenes ¿Cuántas bebidas con alcohol consume en esas ocasiones? (presione las que correspondan)',
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
    {id: 3.0,
      orden: 3,
    texto: 'En los últimos 12 meses, ¿con qué frecuencia ha bebido 5 o más tragos en un mismo día?',
    a1: 'Nunca',
    a2: 'Algunos meses',
    a3: 'Mensualmente',
    a4: 'Semanalmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 4.0,
      orden: 4,
    texto: 'En los últimos 12 meses, ¿Con qué frecuencia no ha podido parar de beber una vez que había empezado?',
    a1: 'Nunca',
    a2: 'Algunos meses',
    a3: 'Mensualmente',
    a4: 'Semanalmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 5.0,
      orden: 5,
    texto: 'En los últimos 12 meses, ¿Con qué frecuencia no pudo hacer lo que se esperaba de usted porque había bebido?',
    a1: 'Nunca',
    a2: 'Algunos meses',
    a3: 'Mensualmente',
    a4: 'Semanalmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 6.0,
      orden: 6,
    texto: 'En los últimos 12 meses, ¿Con qué frecuencia ha necesitado beber en ayunas para recuperarse después de haber bebido mucho el día anterior?',
    a1: 'Nunca',
    a2: 'Algunos meses',
    a3: 'Mensualmente',
    a4: 'Semanalmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 7.0,
      orden: 7,
    texto: 'En los últimos 12 meses, ¿Con qué frecuencia ha tenido remordimientos o sentimientos de culpa después de haber bebido?',
    a1: 'Nunca',
    a2: 'Algunos meses',
    a3: 'Mensualmente',
    a4: 'Semanalmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 8.0,
      orden: 8,
    texto: 'En los últimos 12 meses, ¿Con qué frecuencia no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?',
    a1: 'Nunca',
    a2: 'Algunos meses',
    a3: 'Mensualmente',
    a4: 'Semanalmente',
    a5: 'A diario o casi a diario',
    p1: 0,
    p2: 1,
    p3: 2,
    p4: 3,
    p5: 4,
    },
    {id: 9.0,
      orden: 9,
    texto: 'Alguna vez en la vida, ¿Usted o alguna otra persona ha resultado herida porque usted había bebido?',
    a1: 'Nunca',
    a2: 'Sí, pero no el curso del último año',
    a3: 'Sí, durante el último año',
    a4: null,
    a5: null,
    p1: 0,
    p2: 2,
    p3: 4,
    p4: null,
    p5: null
    },
    {id: 10.0,
      orden: 10,
    texto: 'Alguna vez en la vida ¿Alguien cercano o un profesional de la salud ha mostrado preocupación por su consumo de bebidas alcohólicas, o le han sugerido que deje de beber?',
    a1: 'Nunca',
    a2: 'Sí, pero no el curso del último año',
    a3: 'Sí, durante el último año',
    a4: null,
    a5: null,
    p1: 0,
    p2: 2,
    p3: 4,
    p4: null,
    p5: null
    }
 ]

get_audit():Observable<Preguntas[]>{
  return of(this.auditItems)
}

get_auditPregunta(secuencia:number) {
  return this.get_audit().pipe(
    map((pregunta: Preguntas[]) => pregunta.find(item => item.orden === secuencia))
  )
}

get_itemid(secuencia:number):number{
    const item = this.auditItems.find(item => item.orden === secuencia)
    if(item === undefined){return}
    return item.id
}

get_texto_pregunta(item, alt){
  // const alternativa = 'a'+alt
    const resp = this.auditItems.find(pregunta => pregunta.orden == item)
    if(resp === undefined){return}
    if(alt === undefined){return}
    return resp['a'+(alt+1)]
}

}
