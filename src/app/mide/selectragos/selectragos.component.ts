import { Component, OnDestroy } from '@angular/core';
import { ContadortragosService} from '../contadortragos.service'
import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-selectragos',
  templateUrl: './selectragos.component.html',
  styleUrls: ['./selectragos.component.css']
})
export class SelectragosComponent implements OnDestroy {

  columnsToDisplay = ['cantidad','tragoImagen', 'tragoNombre','suma', 'resta']
  datos = []
  subscription: Subscription;


  constructor( private contadortragosService: ContadortragosService) {
    this.subscription = contadortragosService.get_lista_tragos().
      subscribe(datos => this.datos = datos)}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  suma(indx: number): void {
    this.contadortragosService.suma(indx)
  }

  resta(indx: number): void {
    this.contadortragosService.resta(indx)

  }

}
