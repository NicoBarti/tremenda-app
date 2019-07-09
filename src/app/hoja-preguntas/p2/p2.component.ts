import { Component, OnDestroy } from '@angular/core';
import { ContadorTragosService} from './contador-tragos.service'
import { Subscription }   from 'rxjs';
import { Trago} from '../cuestionario/trago'
import {MatGridListModule} from '@angular/material/grid-list';

import {SelectorService} from '../../dialogos/selectorp2/selector.service'
import { Selectorp2Component } from '../../dialogos/selectorp2/selectorp2.component'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnDestroy {

  datos: Trago[]
  subscription: Subscription;
  ok: boolean = false

  constructor(private contadortragosService: ContadorTragosService,
              private selector: SelectorService,
              public dialog: MatDialog,) {
    this.subscription = contadortragosService.get_lista_tragos$().
      subscribe(datos => {this.datos = datos,
      console.log(datos)}) }

  ngOnDestroy(){
        this.subscription.unsubscribe();
      }

  suma(indx: number): void {
        this.contadortragosService.suma(indx)
      }

  resta(indx: number): void {
        this.contadortragosService.resta(indx)
      }

anima(vineta):void{

  const dialogRef = this.dialog.open(Selectorp2Component, {
    width: '280px',
    // height: '180px',
    data: {imagen: vineta.imagen, cant: vineta.cant, nombre: vineta.nombre, indx: vineta.indx}
  });

  this.selector.setdetalle(vineta)

}

  }
