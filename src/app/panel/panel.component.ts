import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    constructor(@Inject(DOCUMENT) private document: any) {}
    elem;


  cards = [
    { title: 'Comenzar', cols: 1, rows: 1, route: 'usuario', img: "/../../assets/imagenes/gauge-type1-20-500px.png" },
    { title: 'RescateDatos', cols: 1, rows: 1, route: 'datos', img: "/../../assets/imagenes/bombilla.png" }

  ];

  ngOnInit() {
      this.elem = document.documentElement;

    }

  openFullscreen(){
    // if (this.elem.requestFullscreen) {
    //   this.elem.requestFullscreen();
    // } else if (this.elem.mozRequestFullScreen) {
    //   /* Firefox */
    //   this.elem.mozRequestFullScreen();
    // } else
    if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    }
    // else if (this.elem.msRequestFullscreen) {
    //   /* IE/Edge */
    //   this.elem.msRequestFullscreen();
    // }
  }
}
