import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import {Trago } from '../cuestionario/trago'
import {LISTA_TRAGOS} from '../../hoja-preguntas/cuestionario/lista_tragos'
import  {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-detallep3',
  templateUrl: './detallep3.component.html',
  styleUrls: ['./detallep3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Detallep3Component implements OnInit {

columnsToDisplay = ['tragoImagen', 'tragoNombre','equivalencia']
datos = []

  constructor(public dialogRef: MatDialogRef<Detallep3Component>) { }

  ngOnInit() {
    this.armaLista()
  }

  armaLista():void{

this.datos = [
  {imagen: LISTA_TRAGOS[0].imagen, nombre: 'Copa de vino 100 mL', eq: 1 },
  {imagen: LISTA_TRAGOS[1].imagen, nombre: 'Vaso de vino 200 mL', eq: 2},
  {imagen: LISTA_TRAGOS[2].imagen, nombre: 'Botella de vino 750 mL', eq: 6},

  {imagen: LISTA_TRAGOS[3].imagen, nombre: 'Lata de cerveza 375cc', eq: 1 },
  {imagen: LISTA_TRAGOS[4].imagen, nombre: 'Shop 500cc', eq: 1.5 },
  {imagen: LISTA_TRAGOS[5].imagen, nombre: 'Botella de cerveza 1 litro', eq: 3 },

  {imagen: LISTA_TRAGOS[8].imagen, nombre: 'Combinado fuerte', eq: 2 },
  {imagen: LISTA_TRAGOS[6].imagen, nombre: 'Corto de licor 30 mL', eq: 1},
  {imagen: LISTA_TRAGOS[7].imagen, nombre: 'Combinado simple', eq: 1}

]
  }

}
