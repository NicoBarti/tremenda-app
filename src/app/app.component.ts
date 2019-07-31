import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, style, animate, state, transition, AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: '<div [@routeAnimations]="preparaRuta(outlet)" > <router-outlet #outlet="outlet"></router-outlet></div>',
  animations: [
    trigger('routeAnimations',[
      transition('* <=> *', [
        style({ opacity: 0 }),
      animate('400ms ease-in')
      ])
    ])
  ]
  // styleUrls: ['./app.component.css']
})

export class AppComponent {

title = 'FONIS';

preparaRuta(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animacion'];
}

  }
