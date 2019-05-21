import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  constructor() { }

  pregunta:any[] = [
     {texto:'¿Con qué frecuencia ha consumido alguna bebida que contenía alcohol durante los últimos 12 meses?', id: 1},
     {texto:'Qué suele tomar cuando consume alcohol durante el último año?', id:1},
     {texto:'¿Con qué frecuencia ha tomado 5 o más tragos en una ocasión durante el último año?', id:1},
  ];

  ngOnInit() {
  }

}
