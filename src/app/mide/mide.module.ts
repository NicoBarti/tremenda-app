import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ModuloMaterial} from '../moduloMaterial'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { MideComponent } from './mide.component';
import { SelectragosComponent} from './selectragos/selectragos.component'

import { ContadortragosService} from './contadortragos.service'

import {MideRoutingModule} from './mide-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ModuloMaterial,
    FormsModule,
    ReactiveFormsModule,
    MideRoutingModule
  ],
  declarations: [
    MideComponent,
    SelectragosComponent

  ],
  providers: [ ContadortragosService ]
})
export class MideModule {}
