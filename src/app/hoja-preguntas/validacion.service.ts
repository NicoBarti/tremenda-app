import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import {MatDialog, MatDialogRef } from '@angular/material';
import { Confirma0tragosComponent } from '../dialogos/confirma0tragos/confirma0tragos.component'


@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor(
    public dialog: MatDialog,
    private router: Router,

  ) { }

es_valida(item, respuesta):boolean{
  console.log(item)
  console.log(respuesta)

  if(item == 1){
    if(respuesta == 0){
      this.invalida1()
      return false}
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

}
