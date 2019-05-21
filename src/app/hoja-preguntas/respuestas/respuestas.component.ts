import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  constructor() { }

  p1 = [
    {puntaje: 0,  texto: 'Nunca'},
    {puntaje: 1,  texto: '1 o menos veces al mes'},
    {puntaje: 2,  texto: 'De 2 a 4 veces al mes'},
    {puntaje: 3,  texto: 'De 2 a 3 veces a la semana'},
    {puntaje: 4,  texto: '4 o más veces a la semana'}
  ];

  respuestaForm: FormGroup;

  ngOnInit() {
    this.respuestaForm  = new FormGroup({
      'item': new FormControl('', Validators.required)
    })
  }

  get item() { return this.respuestaForm.get('item')};


}
