import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import {CuestionarioService} from '../cuestionario/cuestionario.service'
import {SecuenciadorService} from '../secuenciador.service'
import {Preguntas} from '../cuestionario/preguntas'

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  constructor(private cuestionarioService: CuestionarioService,
              private secuenciadorService: SecuenciadorService,
              ) { }

  pregunta:Preguntas
  respuestaForm: FormGroup;
  respuestas:any[] = []
  tiempoInicio:number


  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.pregunta = this.cuestionarioService.get_auditAlternativas(this.secuenciadorService.get_secuencia())

    this.construyeRespuestas()

    let d = new Date()
    this.tiempoInicio = d.getTime()
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

enviar(){
  let d = new Date()
  let duracion = d.getTime() - this.tiempoInicio
  this.secuenciadorService.graba_respuesta(this.pregunta.id, this.item.value, duracion)
}
}
