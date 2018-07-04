import { Component } from '@angular/core';

@Component({
  selector: 'app-listatragos',
  templateUrl: './listatragos.component.html',
  styleUrls: ['./listatragos.component.css']
})
export class ListatragosComponent {

  tragos = [
    { nombre: 'Lata de cerveza' , eq: '1 trago' , img: '../../assets/tragos/cerveza_1.png' },
    { nombre: 'Copa de vino', eq: '1 trago' , img: '../../assets/tragos/vino_1.png' },
    { nombre: 'Corto de licor', eq: '1 trago', img: '../../assets/tragos/corto_1.png' },
    { nombre: 'Shop grande', eq: '3 tragos' , img: '../../assets/tragos/shop_grande.png' },
    { nombre: 'Shop pequeño', eq: '1,5 tragos', img: '../../assets/tragos/shop_pequeno.png' },
    { nombre: 'Vaso de vino', eq: '2 tragos' , img: '../../assets/tragos/vaso_vino.png' },
    { nombre: 'Combinado simple', eq: '1 trago' , img: '../../assets/tragos/combinado_simple.png' },
    { nombre: 'Combinado fuerte', eq: '2 tragos', img: '../../assets/tragos/combinado_fuerte.png' },
    { nombre: 'Botella de cerveza', eq: '3 tragos', img: '../../assets/tragos/botella_cerveza.png' },
    { nombre: 'Botella de vino', eq: '6 tragos', img: '../../assets/tragos/botella_vino.png' },
    { nombre: 'Caja de vino', eq: '8 tragos' , img: '../../assets/tragos/caja_vino.png' },
    { nombre: 'Botella de licor', eq: '17 tragos', img: '../../assets/tragos/botella_licor.png' }
  ]

  }
