import { Component, OnInit, Inject } from '@angular/core';
import { SelectorService } from './selector.service'
import {Trago} from  '../../hoja-preguntas/cuestionario/trago'
import  {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-selectorp2',
  templateUrl: './selectorp2.component.html',
  styleUrls: ['./selectorp2.component.css']
})
export class Selectorp2Component implements OnInit {

  detalle: Trago

  constructor(private selector: SelectorService,
    public dialogRef: MatDialogRef<Selectorp2Component>,
    @Inject(MAT_DIALOG_DATA) public data: Trago) { }

  ngOnInit() {
    this.detalle = this.selector.getdetalle()
  }

}
