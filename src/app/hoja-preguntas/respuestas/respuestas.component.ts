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
              private secuenciadorService: SecuenciadorService) { }

respuestas:any[]

  respuestaForm: FormGroup;

  ngOnInit() {
    this.respuestaForm  = new FormGroup({
      'item': new FormControl('', Validators.required)
    })

    this.respuestas = this.cuestionarioService.get_auditAlternativas(this.secuenciadorService.get_secuencia())

  }

  get item() { return this.respuestaForm.get('item')};


}
