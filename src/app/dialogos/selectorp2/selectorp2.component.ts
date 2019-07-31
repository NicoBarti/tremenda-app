import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { SelectorService } from './selector.service'
import {Trago} from  '../../hoja-preguntas/cuestionario/trago'
import  {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ContadorTragosService} from '../../hoja-preguntas/p2/contador-tragos.service'

@Component({
  selector: 'app-selectorp2',
  templateUrl: './selectorp2.component.html',
  styleUrls: ['./selectorp2.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class Selectorp2Component implements OnInit {

cantidad: number

  constructor(private selector: SelectorService,
    private contadortragosService: ContadorTragosService,
    public dialogRef: MatDialogRef<Selectorp2Component>,
    @Inject(MAT_DIALOG_DATA) public data: Trago) {}

  ngOnInit() {
    this.cantidad = this.data.cant
    if(this.data.cant === null){
      this.cantidad = 1;
      this.contadortragosService.set_uno_index(this.data.indx)
      }
    }


      suma(indx: number): void {
            this.contadortragosService.suma(indx);
            this.cantidad ++
          }

      resta(indx: number): void {
            this.contadortragosService.resta(indx);
            if(this.cantidad == 0){return}
            this.cantidad --
          }

  ok(){
    this.dialogRef.close()
  }

}
