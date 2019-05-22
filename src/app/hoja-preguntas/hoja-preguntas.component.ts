import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import {SecuenciadorService} from './secuenciador.service'


@Component({
  selector: 'app-hoja-preguntas',
  templateUrl: './hoja-preguntas.component.html',
  styleUrls: ['./hoja-preguntas.component.css']
})
export class HojaPreguntasComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private secuenciadorService:SecuenciadorService
  ) { }

// pregunta: Observable<any>

  ngOnInit() {
    this.secuenciadorService.set_secuencia(this.route.snapshot.paramMap.get('n'))
   }

}
