import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import {CuestionarioService} from '../cuestionario/cuestionario.service'
import {SecuenciadorService} from '../secuenciador.service'
import {Preguntas} from '../cuestionario/preguntas'

import {ActivatedRoute, ParamMap} from '@angular/router'
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs'


@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  constructor(private cuestionarioService: CuestionarioService,
              private secuenciadorService: SecuenciadorService,
              private route: ActivatedRoute
              ) { }

  // pregunta:Preguntas
  respuestaForm: FormGroup;
  respuestas:Observable<Preguntas>
  tiempoInicio:number


  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.respuestas = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
         this.cuestionarioService.get_auditPregunta(+params.get('n'))
      )
    )


    let d = new Date()
    this.tiempoInicio = d.getTime()
  }

  get item() { return this.respuestaForm.get('item')};



enviar(){
  let d = new Date()
  let duracion = d.getTime() - this.tiempoInicio
  // this.secuenciadorService.graba_respuesta(this.pregunta.id, this.item.value, duracion)
}
}
