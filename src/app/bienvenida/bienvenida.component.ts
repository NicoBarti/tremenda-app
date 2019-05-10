import { Component } from '@angular/core';

import { trigger, style, animate, state, transition, AnimationEvent} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
  // providers: [NgbCarouselConfig]
  animations: [
    trigger('myAnimationTrigger1',[
       state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        // style({ opacity: 0 }),
          style({ transform: 'translateX(-100%)' }),
        animate('800ms ease-in-out'),
      ]),
      transition(':leave', [
        animate('800ms 2.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('myAnimationTrigger2',[
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        // style({ opacity: 0 }),
        style({ transform: 'translateX(-100%)' }),
        animate('800ms ease-in-out'),
      ]),
      transition(':leave', [
        animate('800ms 2.5s ease-in-out', style({ transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class BienvenidaComponent {

 mostrar1: boolean = true;
 mostrar2: boolean = false;

  constructor(){};


  onAnimationEvent1 ( event: AnimationEvent ) {

    if(event.fromState === "void"){
      this.mostrar1 = !this.mostrar1
    }
    else if(event.toState === "void"){
      this.mostrar2 = !this.mostrar2
    }

  }

  onAnimationEvent2 ( event: AnimationEvent ) {
    if(event.fromState === "void"){
      this.mostrar2 = !this.mostrar2
    }
    else if(event.toState === "void"){
      this.mostrar1 = !this.mostrar1
    }
  }

}
