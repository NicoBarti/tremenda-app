import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import {MatDialog, MatDialogRef } from '@angular/material';
import { Confirma0tragosComponent } from '../dialogos/confirma0tragos/confirma0tragos.component'
import { ErrorValidacion3Component } from '../dialogos/error-validacion3/error-validacion3.component'
import { ErrorValidacion2Component } from '../dialogos/error-validacion2/error-validacion2.component'

import {AlmecenResultadosService} from '../datos/almecen-resultados.service'
import {ContadorTragosService} from './p2/contador-tragos.service'

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private almacen: AlmecenResultadosService,
    private contadorTragos: ContadorTragosService

  ) { }

es_valida(item, respuesta):boolean{

  if(item == 1){
    if(respuesta == 0){
      this.invalida1()
      return false}
  }

  if(item == 2){
    if(this.contadorTragos.get_calculoTragos() == 0){
      this.invalida2()
      return false
    }
  }

  if(item == 3){
    if(respuesta == 0){
      if(this.almacen.get_alternativa(2) >= 5){
        this.invalida3()
        return false}
    }
  }

  return true
}

invalida1() {
  const dialogRef = this.dialog.open(Confirma0tragosComponent, {
    width: '350px'
  });

  dialogRef.afterClosed().subscribe(cerotragos =>{
     if(cerotragos){

       this.router.navigate(['/eligibilidad0']);
     }
       return})
}

invalida3() {
  this.dialog.open(ErrorValidacion3Component, {
    width: '350px'
  })
}

invalida2() {
  this.dialog.open(ErrorValidacion2Component, {
    width: '350px'
  })
}

}
