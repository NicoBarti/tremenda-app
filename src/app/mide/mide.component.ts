import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Trago } from './trago'
import { ContadortragosService} from './contadortragos.service'
// import { last } from 'rxjs/operators'


@Component({
  selector: 'app-mide',
  templateUrl: './mide.component.html',
  styleUrls: ['./mide.component.css']
})

export class MideComponent implements OnInit {

  firstFormGroup: FormGroup;

  lista_tragos: Trago[] = [];

  constructor(private _formBuilder: FormBuilder,
              private contadortragosService: ContadortragosService) {
                contadortragosService.tragos_totales$.subscribe(
                  datos =>  this.firstFormGroup.patchValue({item2: datos}))
              }

    p1 = [
      {puntaje: 0,  texto: 'Nunca'},
      {puntaje: 1,  texto: '1 o menos veces al mes'},
      {puntaje: 2,  texto: 'De 2 a 4 veces al mes'},
      {puntaje: 3,  texto: 'De 2 a 3 veces a la semana'},
      {puntaje: 4,  texto: '4 o más veces a la semana'}
    ];

    p3 = [
      {puntaje: 0, texto: 'Nunca'},
      {puntaje: 1, texto: 'Menos de una vez al mes'},
      {puntaje: 2, texto: 'Mensualmente'},
      {puntaje: 3, texto: 'Semanalmente'},
      {puntaje: 4, texto: 'A diario o casi a diario'}
    ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      'item1': ['', Validators.required],
      'item2': ['', Validators.required],
      'item3': ['', Validators.required]
    });

    this.get_lista_tragos();
  };

  get item1() { return this.firstFormGroup.get('item1')};
  get item2() { return this.firstFormGroup.get('item2')};
  get item3() { return this.firstFormGroup.get('item3')};

  get_lista_tragos(){
    this.contadortragosService.get_lista_tragos().
      subscribe(lista_tragos => this.lista_tragos = lista_tragos)
  }

  imprime() {
    console.log(this.firstFormGroup.value)
  };

}
