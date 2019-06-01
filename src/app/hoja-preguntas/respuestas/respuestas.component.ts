import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import {CuestionarioService} from '../cuestionario/cuestionario.service'
import {SecuenciadorService} from '../secuenciador.service'
import {Preguntas} from '../cuestionario/preguntas'

import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs'

import {AlmecenResultadosService} from '../../datos/almecen-resultados.service'


@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  constructor(private cuestionarioService: CuestionarioService,
              private route: ActivatedRoute,
              private router: Router,
              private almacen: AlmecenResultadosService
              ) { }

  respuestaForm: FormGroup;
  respuestas:Observable<Preguntas>
  tiempoInicio:number
  n:number
  d = new Date()

  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.respuestas = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.n = +params.get('n')
        this.respuestaForm.patchValue({item: this.almacen.get_alternativa(+params.get('n'))})
        this.tiempoInicio = this.d.getTime()
        return this.cuestionarioService.get_auditPregunta(+params.get('n'))
      }
      ))
  }

  get item() { return this.respuestaForm.get('item')};


enviar(){
  this.navega()
  this.almacen.guardaItem(this.n, this.respuestaForm.get('item').value, this.d.getTime() - this.tiempoInicio)
  this.respuestaForm.reset()
}

navega(){
  if(this.n > 9){
    console.log('terminado')
    return}
  this.router.navigate(['vista/mide', this.n + 1])
}



}
