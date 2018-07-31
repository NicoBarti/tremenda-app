import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Trago } from './trago'
import { ContadortragosService} from './contadortragos.service'


@Component({
  selector: 'app-mide',
  templateUrl: './mide.component.html',
  styleUrls: ['./mide.component.css']
})

export class MideComponent implements OnInit {

  firstFormGroup: FormGroup;
  isLinear = true;

  lista_tragos: Trago[] = [];

  constructor(private _formBuilder: FormBuilder,
              private contadortragosService: ContadortragosService) {}

    p1 = [
      {puntaje: 0,  texto: 'Nunca'},
      {puntaje: 1,  texto: '1 o menos veces al mes'},
      {puntaje: 2,  texto: 'De 2 a 4 veces al mes'},
      {puntaje: 3,  texto: 'De 2 a 3 veces a la semana'},
      {puntaje: 4,  texto: '4 o más veces a la semana'}
    ];
    p2 = [
      {puntaje: 0,  texto: '0'},
      {puntaje: 1,  texto: '1'},
      {puntaje: 2,  texto: '2'},
      {puntaje: 3,  texto: '3'},
      {puntaje: 4,  texto: '4'},
      {puntaje: 5,  texto: '5'},
      {puntaje: 6,  texto: '6'},
      {puntaje: 7,  texto: '7'},
      {puntaje: 8,  texto: '8'},
      {puntaje: 9,  texto: '9'},
      {puntaje: 10,  texto: '10 o más'},
    ];
    p3 = [
      {puntaje: 0, texto: 'Nunca'},
      {puntaje: 1, texto: 'Menos de una vez al mes'},
      {puntaje: 2, texto: 'Mensualmente'},
      {puntaje: 3, texto: 'Semanalmente'},
      {puntaje: 4, texto: 'A diario o casi a diario'}
    ];

  model: number;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      'item1': ['', Validators.required],
      'item2': ['', Validators.required],
      'item3': ['', Validators.required]

    });

    this.get_lista_tragos()

  };

  get item1() { return this.firstFormGroup.get('item1')};
  get item2() { return this.firstFormGroup.get('item2')};
  get item3() { return this.firstFormGroup.get('item3')};

  get_lista_tragos(){
    this.contadortragosService.get_lista_tragos().
      subscribe(lista_tragos => this.lista_tragos = lista_tragos)
  }

  imprime() {
    // this.get_lista_tragos()
    console.log(this.lista_tragos);
  };

}
