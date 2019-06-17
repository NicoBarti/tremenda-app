import { Component, OnDestroy } from '@angular/core';
import { ContadorTragosService} from './contador-tragos.service'
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnDestroy {

  columnsToDisplay = ['tragoImagen', 'tragoNombre','resta','cantidad','suma']
  datos = []
  subscription: Subscription;

  constructor(private contadortragosService: ContadorTragosService) {
    this.subscription = contadortragosService.get_lista_tragos().
      subscribe(datos => this.datos = datos) }

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
