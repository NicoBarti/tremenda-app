import { Component, OnDestroy } from '@angular/core';
import { ContadorTragosService} from './contador-tragos.service'
import { Subscription }   from 'rxjs';
import { Trago} from '../cuestionario/trago'
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnDestroy {

  datos: Trago[]
  subscription: Subscription;
  ok: boolean = false

  constructor(private contadortragosService: ContadorTragosService) {
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
  console.log(vineta)
  this.ok = true

}

  }
