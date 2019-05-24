import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import {CuestionarioService} from '../cuestionario/cuestionario.service'
import {SecuenciadorService} from '../secuenciador.service'
import {Preguntas} from '../cuestionario/preguntas'
import {AlmecenResultadosService} from '../../datos/almecen-resultados.service'
// import {Preguntas} from '../cuestionario/preguntas'

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  constructor(private cuestionarioService: CuestionarioService,
              private secuenciadorService: SecuenciadorService,
              private almecenResultadosService: AlmecenResultadosService) { }

  pregunta:Preguntas
  respuestaForm: FormGroup;
  respuestas:any[] = []


  ngOnInit() {
    this.respuestaForm  = new FormGroup({
      'item': new FormControl('', Validators.required)
    })

    this.pregunta = this.cuestionarioService.get_auditAlternativas(this.secuenciadorService.get_secuencia())

    this.construyeRespuestas()

    this.almecenResultadosService.guardaItem('hhd','ddd')
  }

  get item() { return this.respuestaForm.get('item')};


construyeRespuestas() {
  this.respuestas.push({a: this.pregunta.a1, p: this.pregunta.p1})
  this.respuestas.push({a: this.pregunta.a2, p: this.pregunta.p2})
  this.respuestas.push({a: this.pregunta.a3, p: this.pregunta.p3})
  if(this.pregunta.a4){
    this.respuestas.push({a: this.pregunta.a4, p: this.pregunta.p4})
    this.respuestas.push({a: this.pregunta.a5, p: this.pregunta.p5})
    }

}

}
