import { Component, OnInit } from '@angular/core';
import { ContadortragosService} from '../contadortragos.service'

@Component({
  selector: 'app-selectragos',
  templateUrl: './selectragos.component.html',
  styleUrls: ['./selectragos.component.css']
})
export class SelectragosComponent implements OnInit {

  columnsToDisplay = ['cantidad','tragoImagen', 'tragoNombre','suma', 'resta']

  datos = []

  constructor( private contadortragosService: ContadortragosService) { }

  ngOnInit() {
    this.get_lista_tragos()
  }

  get_lista_tragos(){
    this.contadortragosService.get_lista_tragos().
      subscribe(datos => this.datos = datos)
  }

  suma(indx: number): void {
    this.contadortragosService.suma(indx)
  }

  resta(indx: number): void {
    this.contadortragosService.resta(indx)
  }

}
