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
        animate('800ms ease-in'),
      ]),
      transition(':leave', [
        animate('800ms 2.5s ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('myAnimationTrigger2',[
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        // style({ opacity: 0 }),
        style({ opacity: 0 }),
        animate('800ms ease-in'),
      ]),
      transition(':leave', [
        animate('800ms 2.5s ease-out', style({ opacity: 0}))
      ])
    ])
  ]
})

export class BienvenidaComponent {

  mostrar1: boolean = true;
  mostrar2: boolean = false;
  ciclo: string = '2.b'

  constructor(
      private almacen: AlmecenResultadosService,
        private router: Router,
  ){};

  onAnimationEvent ( event: AnimationEvent ) {

//entrada desde trigger1
 if(event.triggerName == "myAnimationTrigger1"){
   if(event.fromState === "void" && this.ciclo == '2.b'){
           this.ciclo = '1.a'
           this.mostrar1 = !this.mostrar1}

             else if(event.toState === "void" && this.ciclo == '1.a'){
                    this.ciclo = '1.b'
                    this.mostrar2 = !this.mostrar2}
   }
//entrada desde trigger2
 else if(event.triggerName == "myAnimationTrigger2"){
   if(event.fromState === "void" && this.ciclo == '1.b'){
           this.ciclo = '2.a'
           this.mostrar2 = !this.mostrar2}

           else if(event.toState === "void" && this.ciclo == '2.a'){
                  this.ciclo = '2.b'
                  this.mostrar1 = !this.mostrar1}
  }
  }

  navega(){
    this.almacen.reseteaAlmacen();
    this.router.navigate(['vista/mide' , 1]);

  }
}
