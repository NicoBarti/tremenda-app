import { Component, OnInit } from '@angular/core';
// import {Trago } from '../cuestionario/trago'
import {LISTA_TRAGOS} from '../cuestionario/lista_tragos'

@Component({
  selector: 'app-detallep3',
  templateUrl: './detallep3.component.html',
  styleUrls: ['./detallep3.component.css']
})
export class Detallep3Component implements OnInit {

columnsToDisplay = ['tragoImagen', 'tragoNombre','equivalencia']
datos = []

  constructor() { }

  ngOnInit() {
    this.armaLista()
  }

  armaLista():void{

this.datos = [
  {imagen: LISTA_TRAGOS[0].imagen, nombre: '5 copas de vino', eq: 5 },
  {imagen: LISTA_TRAGOS[4].imagen, nombre: '5 latas cerveza 375cc', eq: 5 },
  {imagen: LISTA_TRAGOS[7].imagen, nombre: '2 botellas de cerveza', eq: 6 },
  {imagen: LISTA_TRAGOS[10].imagen, nombre: '3 combinados fuertes', eq: 5 }
]
  }

}
