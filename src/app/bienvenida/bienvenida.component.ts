import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
  providers: [NgbCarouselConfig]
})
export class BienvenidaComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;
      config.wrap = true;
      config.keyboard = true;
      config.pauseOnHover = false;
     }

  ngOnInit() {
  }

}
