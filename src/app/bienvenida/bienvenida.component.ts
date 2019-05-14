import { Component, OnInit } from '@angular/core';

import { trigger, style, animate, state, transition, AnimationEvent} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
  // providers: [NgbCarouselConfig]
  animations: [
    trigger('myAnimationTrigger1',[
       state('in', style({ opacity: 1 })),
      transition(':enter', [
        // style({ opacity: 0 }),
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

export class BienvenidaComponent implements OnInit{

  mostrar1: boolean
  mostrar2: boolean

  constructor(){};

  ngOnInit() {
    this.mostrar1 = true;
    this.mostrar2 = false;
  }

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
