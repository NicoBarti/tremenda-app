import { Component, OnInit } from '@angular/core';
import {CuestionarioService} from '../../hoja-preguntas/cuestionario/cuestionario.service'
import { FormGroup ,FormControl } from '@angular/forms';
import {Preguntas} from '../../hoja-preguntas/cuestionario/preguntas'
import { trigger, style, animate, state, transition, AnimationEvent} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-instrucciones-iniciales',
  templateUrl: './instrucciones-iniciales.component.html',
  styleUrls: ['./instrucciones-iniciales.component.css'],
  animations: [
    trigger('preguntaAnimacion', [
      state('activo', style({ backgroundColor: 'white', padding: '15px', border: '2px', borderColor: '#ff4081', borderStyle: 'solid'})),
      state('inactivo', style({ backgroundColor: 'transparent'})),
     transition('* => activo', [
       animate('250ms 200ms')
    ]),
    transition('* => inactivo', [
      style({opacity: 1}),
      animate('250ms ease-out')
    ])
    ])
  ]
})
export class InstruccionesInicialesComponent implements OnInit {

  constructor(
    private cuestionarioService: CuestionarioService
  ) { }

  respuestaForm: FormGroup;
  respuestas: Preguntas
  animarPregunta: Boolean


  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('')})
    this.respuestas = this.cuestionarioService.get_pregunta1()
    console.log(this.respuestas)
    this.animarPregunta = true

  }

  get item() { return this.respuestaForm.get('item')};


}
