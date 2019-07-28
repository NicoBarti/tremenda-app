import { Component } from '@angular/core';

import { trigger, style, animate, state, transition, AnimationEvent} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlmecenResultadosService} from '../datos/almecen-resultados.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
  // providers: [NgbCarouselConfig]
  animations: [
    trigger('myAnimationTrigger1',[
       state('in', style({ opacity: 1 })),
      transition(':enter', [
          style({ opacity: 0 }),
        animate('400ms ease-in'),
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('myAnimationTrigger2',[
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        // style({ opacity: 0 }),
        style({ opacity: 0 }),
        animate('400ms 400ms ease-in'),
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({ opacity: 0}))
      ])
    ])
  ]
})

export class BienvenidaComponent {

  mostrar1: boolean = true;
  mostrar2: boolean = false;
  // ciclo: string = '2.b'

  constructor(
      private almacen: AlmecenResultadosService,
        private router: Router,
  ){};

  navega(){
    if(this.mostrar2 == false){
      this.mostrar1 = false
      this.mostrar2 = true
      return
    }
    this.almacen.reseteaAlmacen();
    this.router.navigate(['vista/mide' , 1]);

  }
}
