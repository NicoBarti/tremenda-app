import { Component, OnInit } from '@angular/core';
import {CuestionarioService} from '../cuestionario/cuestionario.service'
import {SecuenciadorService} from '../secuenciador.service'

import {Preguntas} from '../cuestionario/preguntas'

import {ActivatedRoute, ParamMap} from '@angular/router'
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  constructor(private cuestionarioService: CuestionarioService,
              private secuenciadorService: SecuenciadorService,
              private route: ActivatedRoute

               ) { }

  pregunta: Observable<Preguntas>

  ngOnInit() {

    this.pregunta = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
         this.cuestionarioService.get_auditPregunta(+params.get('n'))
      )
    )


  }
print(){
  console.log(this.pregunta)
}
}
