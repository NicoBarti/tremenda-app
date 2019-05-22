import { Component, OnInit } from '@angular/core';
import {CuestionarioService} from '../cuestionario/cuestionario.service'
import {SecuenciadorService} from '../secuenciador.service'

import {Preguntas} from '../cuestionario/preguntas'


@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  constructor(private cuestionarioService: CuestionarioService,
              private secuenciadorService: SecuenciadorService

               ) { }

  pregunta: string

  ngOnInit() {
    this.pregunta = this.cuestionarioService.get_auditPregunta(this.secuenciadorService.get_secuencia())

  }

}
