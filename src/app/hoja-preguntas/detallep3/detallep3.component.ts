import { Component, OnInit } from '@angular/core';
import {Trago } from '../cuestionario/trago'
import {LISTA_TRAGOS} from '../cuestionario/lista_tragos'

@Component({
  selector: 'app-detallep3',
  templateUrl: './detallep3.component.html',
  styleUrls: ['./detallep3.component.css']
})
export class Detallep3Component implements OnInit {

columnsToDisplay = ['tragoImagen', 'tragoNombre','equivalencia']
datos: Trago[] = []

  constructor() { }

  ngOnInit() {
    this.datos.push(LISTA_TRAGOS[0], LISTA_TRAGOS[4], LISTA_TRAGOS[7], LISTA_TRAGOS[10])

  }

}
