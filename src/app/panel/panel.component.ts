import { Component } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  cards = [
    { title: 'Comenzar', cols: 1, rows: 1, route: 'usuario', img: "/../../assets/imagenes/gauge-type1-20-500px.png" },
    { title: 'RescateDatos', cols: 1, rows: 1, route: 'datos', img: "/../../assets/imagenes/bombilla.png" }

  ];
}
