import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl,ValidatorFn } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Trago } from './trago'
import { ContadortragosService} from './contadortragos.service'
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-mide',
  templateUrl: './mide.component.html',
  styleUrls: ['./mide.component.css']
})

export class MideComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  lista_tragos: Trago[] = [];
  subscription: Subscription;

  constructor(
              private contadortragosService: ContadortragosService) {
                this.subscription = contadortragosService.tragos_totales$.subscribe(
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
    this.firstFormGroup = new FormGroup ({
      'item1': new FormControl('', [Validators.required, this.congruenciaRespuestasValidator()]),
      'item2': new FormControl('', Validators.required),
      'item3': new FormControl('', Validators.required)
    });

    this.get_lista_tragos();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

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

  congruenciaRespuestasValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value === 0){this.imprime()}
      const forbidden = false;
      return forbidden ? {'error': {value: control.value}} : null;
    };
  }

}
