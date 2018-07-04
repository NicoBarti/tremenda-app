import { Component } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  cards = [
    { title: 'Mide tu consumo', cols: 1, rows: 1, route: '/', img: "/../../assets/imagenes/gauge-type1-20-500px.png" },
    { title: 'Consejos para ti', cols: 1, rows: 1, route: '/', img: "/../../assets/imagenes/bombilla.png" },
    { title: 'Metas personales', cols: 1, rows: 1, route: '/', img: "/../../assets/imagenes/meta.png"},
    { title: 'Información', cols: 1, rows: 1, route: '/info', img: "/../../assets/imagenes/info.png" },
  ];
}
