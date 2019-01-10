import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {Usuario} from './usuario'



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  usuario: Usuario[] = [];
  opciones: FormGroup;

  constructor() {}

  ngOnInit() {
    this.opciones = new FormGroup({
      sexo: new FormControl('', Validators.required),
      edad: new FormControl('', [Validators.min(15), Validators.required])
    });

  }

  get edad() { return this.opciones.get('edad'); }

  enviar() {
    Object.assign(this.usuario, this.opciones.value)

  }
}
