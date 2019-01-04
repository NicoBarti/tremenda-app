import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Trago } from './trago'
import { ContadortragosService } from './contadortragos.service'
import { PerfilConsumoService } from '../servicios/perfil-consumo.service'

import { DialogoNoAlcoholComponent } from './dialogo-no-alcohol/dialogo-no-alcohol.component'

import { Subscription }   from 'rxjs';

import {MatDialog, MatDialogRef } from '@angular/material';
import {MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-mide',
  providers: [ContadortragosService ],
  templateUrl: './mide.component.html',
  styleUrls: ['./mide.component.css']
})

export class MideComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  lista_tragos: Trago[] = [];
  subscription: Subscription;


  congruenciaTragosValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // console.log('corriendo congruenciaTragosValidator')
  const item2 = control.get('item2');
  const item3 = control.get('item3');
  var forbidden = false;
    if(item2.value >= 5 && item3.value < 1 && item2.status == "VALID" && item3.status == "VALID" ){
      forbidden = true;
      this.mensaje();

  return forbidden ? { 'incongruencia': true } : null;
  };
  }

  constructor( public dialog: MatDialog,
               public snackBar: MatSnackBar,
              private contadortragosService: ContadortragosService,
              private perfilConsumoService: PerfilConsumoService) {
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

    p4 = [
      {puntaje: 0, texto: 'Nunca'},
      {puntaje: 1, texto: 'Menos de una vez al mes'},
      {puntaje: 2, texto: 'Mensualmente'},
      {puntaje: 3, texto: 'Semanalmente'},
      {puntaje: 4, texto: 'A diario o casi a diario'}
    ];

    p5 = [
      {puntaje: 0, texto: 'Nunca'},
      {puntaje: 1, texto: 'Menos de una vez al mes'},
      {puntaje: 2, texto: 'Mensualmente'},
      {puntaje: 3, texto: 'Semanalmente'},
      {puntaje: 4, texto: 'A diario o casi a diario'}
    ];

    p6 = [
      {puntaje: 0, texto: 'Nunca'},
      {puntaje: 1, texto: 'Menos de una vez al mes'},
      {puntaje: 2, texto: 'Mensualmente'},
      {puntaje: 3, texto: 'Semanalmente'},
      {puntaje: 4, texto: 'A diario o casi a diario'}
    ];

    p7 = [
      {puntaje: 0, texto: 'Nunca'},
      {puntaje: 1, texto: 'Menos de una vez al mes'},
      {puntaje: 2, texto: 'Mensualmente'},
      {puntaje: 3, texto: 'Semanalmente'},
      {puntaje: 4, texto: 'A diario o casi a diario'}
    ];

    p8 = [
      {puntaje: 0, texto: 'Nunca'},
      {puntaje: 1, texto: 'Menos de una vez al mes'},
      {puntaje: 2, texto: 'Mensualmente'},
      {puntaje: 3, texto: 'Semanalmente'},
      {puntaje: 4, texto: 'A diario o casi a diario'}
    ];

    p9 = [
      {puntaje: 0, texto: 'No'},
      {puntaje: 2, texto: 'Sí, pero no el curso del último año'},
      {puntaje: 4, texto: 'Sí, el último año'}
    ];

    p10 = [
      {puntaje: 0, texto: 'No'},
      {puntaje: 2, texto: 'Sí, pero no el curso del último año'},
      {puntaje: 4, texto: 'Sí, el último año'}
    ];

  ngOnInit() {
    this.contadortragosService.ceroTragos();
    this.firstFormGroup = new FormGroup ({
      'item1': new FormControl('', [Validators.required, this.interceptaP1Validator()]),
      'item2': new FormControl('', Validators.required),
      'item3': new FormControl('', Validators.required),
      'item4': new FormControl('', Validators.required),
      'item5': new FormControl('', Validators.required),
      'item6': new FormControl('', Validators.required),
      'item7': new FormControl('', Validators.required),
      'item8': new FormControl('', Validators.required),
      'item9': new FormControl('', Validators.required),
      'item10': new FormControl('', Validators.required)
    }, { validators: this.congruenciaTragosValidator });
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get item1() { return this.firstFormGroup.get('item1')};
  get item2() { return this.firstFormGroup.get('item2')};
  get item3() { return this.firstFormGroup.get('item3')};

  enviar() {
    this.contadortragosService.get_lista_tragos().
        subscribe(lista_tragos => {this.lista_tragos = lista_tragos;
      this.perfilConsumoService.set_perfil_consumo(this.firstFormGroup.value, this.lista_tragos);
    })
  }

  mensaje(){
  this.snackBar.open('Usted consume 5 o más tragos en una ocasion típica','revise respuestas',{duration: 3000});
  }

  interceptaP1Validator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value === 0){
            const dialogRef = this.dialog.open(DialogoNoAlcoholComponent, {
              width: '250px',
            });
            dialogRef.afterClosed().subscribe(result => {
              if(result){
                this.firstFormGroup.patchValue({item2: 0});
                this.firstFormGroup.patchValue({item3: 0});
                this.contadortragosService.ceroTragos();
                this.enviar();
              }
                else{control.reset()}
            });
      }
      const forbidden = false;
      return forbidden ? {'error': {value: control.value}} : null;
    };
  }
}
