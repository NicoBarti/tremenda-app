import { Injectable } from '@angular/core';
import { Trago } from '../../hoja-preguntas/cuestionario/trago'

@Injectable({
  providedIn: 'root'
})
export class SelectorService {

detalle: Trago

  constructor() { }

  setdetalle(detalle) {
    this.detalle = detalle
  }

  getdetalle():Trago{
    console.log(this.detalle)
    return this.detalle
  }
}
