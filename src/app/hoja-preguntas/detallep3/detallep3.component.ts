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
  {imagen: LISTA_TRAGOS[0].imagen, nombre: 'Copa de vino de 100 mL', eq: 1 },
  {imagen: LISTA_TRAGOS[3].imagen, nombre: 'Lata de cerveza de 375cc', eq: 1 },
  // {imagen: LISTA_TRAGOS[5].imagen, nombre: 'Botella de cerveza de 1 litro', eq: 3 },
  {imagen: LISTA_TRAGOS[8].imagen, nombre: 'Combinado fuerte', eq: 2 },
  // {imagen: LISTA_TRAGOS[1].imagen, nombre: 'Vaso de vino de 200 mL', eq: 2},
  {imagen: LISTA_TRAGOS[7].imagen, nombre: 'Corto de licor de 30 mL', eq: 1},
]
  }

}
