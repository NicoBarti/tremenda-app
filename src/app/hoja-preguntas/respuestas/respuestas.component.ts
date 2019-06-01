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
              private secuenciadorService: SecuenciadorService,
              private route: ActivatedRoute,
              private router: Router,
              private almacen: AlmecenResultadosService
              ) { }

  respuestaForm: FormGroup;
  respuestas:Observable<Preguntas>
  tiempoInicio:number
  n:number

  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.respuestas = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.n = +params.get('n')
        this.almacen.get_alternativa(this.n)
        // this.respuestaForm.patchValue({item: +params.get('n')})
        return this.cuestionarioService.get_auditPregunta(+params.get('n'))
      }
      ))

    let d = new Date()
    this.tiempoInicio = d.getTime()
  }

  get item() { return this.respuestaForm.get('item')};


enviar(){
  let d = new Date()
  let duracion = d.getTime() - this.tiempoInicio
  this.navega()
  this.almacen.guardaItem(this.n, this.respuestaForm.get('item').value, duracion)
  this.respuestaForm.reset()

}

navega(){
  if(this.n > 9){return}
  let n = this.n + 1
  this.router.navigate(['vista/mide', n])
}



}
