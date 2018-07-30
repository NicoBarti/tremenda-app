import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectragos',
  templateUrl: './selectragos.component.html',
  styleUrls: ['./selectragos.component.css']
})
export class SelectragosComponent implements OnInit {

  columnsToDisplay = ['cantidad','tragoImagen', 'tragoNombre','suma', 'resta']

  datos = [
    {imagen: "../../assets/tragos/vino_1.png", nombre: "Copa de vino", indx: 0, cant: 0},
    {imagen: "../../assets/tragos/corto_1.png", nombre: "Corto de licor", indx: 1, cant: 0},
    {imagen: "../../assets/tragos/cerveza_1.png", nombre: "Lata de cerveza", indx: 2, cant: 0},
    {imagen: "../../assets/tragos/cerveza_1.png", nombre: "Lata de cerveza", indx: 3, cant: 0},
    {imagen: "../../assets/tragos/cerveza_1.png", nombre: "Lata de cerveza", indx: 4, cant: 0},
    {imagen: "../../assets/tragos/cerveza_1.png", nombre: "Lata de cerveza", indx: 5, cant: 0}
  ]

  constructor() { }

  ngOnInit() {
  }

suma(indx: number): void {
this.datos[indx].cant++
}

resta(indx: number): void {
  if (this.datos[indx].cant == 0 ){return}
  else {this.datos[indx].cant--}

}

get_tragos(): object[]{
return this.datos}

}
