import { Component, OnInit } from '@angular/core';
import {CuestionarioService} from '../../hoja-preguntas/cuestionario/cuestionario.service'
import { FormGroup ,FormControl } from '@angular/forms';
import {Preguntas} from '../../hoja-preguntas/cuestionario/preguntas'


@Component({
  selector: 'app-instrucciones-iniciales',
  // templateUrl: './instrucciones-iniciales.component.html',
  templateUrl: '../../hoja-preguntas/hoja-preguntas.component.html',
  styleUrls: ['./instrucciones-iniciales.component.css']
})
export class InstruccionesInicialesComponent implements OnInit {

  constructor(
    private cuestionarioService: CuestionarioService
  ) { }

  respuestaForm: FormGroup;
  respuestas: Preguntas


  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('')})
    this.respuestas = this.cuestionarioService.get_pregunta1()
    console.log(this.respuestas)

  }

  get item() { return this.respuestaForm.get('item')};


}
