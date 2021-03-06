import { Component, OnInit } from '@angular/core';
import {CuestionarioService} from '../../hoja-preguntas/cuestionario/cuestionario.service'
import { FormGroup ,FormControl } from '@angular/forms';
import {Preguntas} from '../../hoja-preguntas/cuestionario/preguntas'
import { trigger, style, animate, state, transition, AnimationEvent} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import { Router } from '@angular/router';


@Component({
  selector: 'app-instrucciones-iniciales',
  templateUrl: './instrucciones-iniciales.component.html',
  styleUrls: ['./instrucciones-iniciales.component.css'],
  animations: [
    trigger('preguntaAnimacion', [
      state('activo', style({ backgroundColor: 'white', padding: '15px', border: '2px', borderColor: '#ff4081', borderStyle: 'solid'})),
      state('inactivo', style({ backgroundColor: 'transparent'})),
     transition('* => activo', [
       animate('250ms 200ms ease-in')
    ]),
    transition('* => inactivo', [
      style({opacity: 1}),
      animate('250ms ease-out')
    ])
  ]),
  trigger('explicacionPregunta', [
    transition(':enter', [
      style({opacity : 0}),
      animate('250ms 500ms ease-in', style({opacity: 1}))
    ])
  ]),
  trigger('respuestasAnimacion', [
    state('activo', style({ backgroundColor: 'white', padding: '15px', border: '2px', borderColor: '#ff4081', borderStyle: 'solid'})),
    state('inactivo', style({ backgroundColor: 'transparent'})),
    transition('* => activo', [
      animate('250ms 200ms ease-in')
  ]),
  transition('* => inactivo', [
    style({opacity: 1}),
    animate('250ms ease-out')
  ])
]),
trigger('explicacionRespuestas', [
  transition(':enter', [
    style({opacity : 0}),
    animate('250ms 500ms ease-in', style({opacity: 1}))
  ])
]),
trigger('botonesAnimacion', [
  state('activo', style({ backgroundColor: 'white', padding: '15px', border: '2px', borderColor: '#ff4081', borderStyle: 'solid', zIndex: '1'})),
  state('inactivo', style({ backgroundColor: 'transparent'})),
 transition('* => activo', [
   animate('250ms 200ms ease-in')
]),
transition('* => inactivo', [
  style({opacity: 1}),
  animate('250ms ease-out')
])
]),
trigger('explicacionBotones', [
  transition(':enter', [
    style({opacity : 0}),
    animate('250ms 500ms ease-in', style({opacity: 1}))
  ])
]),
trigger('barraAnimacion', [
  state('activo', style({ backgroundColor: 'white', border: '2px', borderColor: '#ff4081', borderStyle: 'solid'})),
  state('inactivo', style({ backgroundColor: 'transparent'})),
 transition('* => activo', [
   animate('250ms 200ms ease-in')
]),
transition('* => inactivo', [
  style({opacity: 1}),
  animate('250ms ease-out')
])
]),
trigger('explicacionBarra', [
  transition(':enter', [
    style({opacity : 0}),
    animate('250ms 500ms ease-in', style({opacity: 1}))
  ])
]),
trigger('bienvenidaAnimacion', [
  state('activo', style({ backgroundColor: 'white', border: '2px', borderColor: '#ff4081', borderStyle: 'solid'})),
  state('inactivo', style({ backgroundColor: 'transparent'})),
 transition('* => activo', [
   animate('250ms 1200ms ease-in')
]),
transition('* => inactivo', [
  style({opacity: 1}),
  animate('250ms ease-out')
])
]),
]
})

export class InstruccionesInicialesComponent implements OnInit {

  constructor(
    private cuestionarioService: CuestionarioService,
    private router: Router,
  ) { }

  //Variables de contenido para el html, imitando compnente hoja-Respuestas
  respuestaForm: FormGroup;
  respuestas: Preguntas

  //Variables que encienden las distintas partes de la animacion
  animarPregunta: Boolean
  animarRespuestas: Boolean
  animarBotones: Boolean
  animarBarra: Boolean
  animarBienvenida: Boolean

  //Secuenciador
  i = 0
  barraProgreso: number = 1


  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('')})
    this.respuestas = this.cuestionarioService.get_pregunta1()
    console.log(this.respuestas)
    this.animarBienvenida = true
  }

  get item() { return this.respuestaForm.get('item')};

siguiente(){
  if(this.i == 0){
    this.animarBienvenida = false
    this.animarPregunta = true
  }
  if(this.i == 1){
    this.animarPregunta = false
    this.animarRespuestas = true
  }
  if(this.i == 2){
    this.animarRespuestas = false
    this.animarBotones = true
  }
  if(this.i == 3){
    this.animarBotones = false
    this.animarBarra = true
  }
  if(this.i == 4){
    this.router.navigate(['vista/mide' , 1]);
  }
  this.i++
}

}
