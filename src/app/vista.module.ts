import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ModuloMaterial} from './moduloMaterial'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { VistaComponent } from './vista.component'
import { MetasComponent } from './metas/metas.component';
import { MideComponent } from './mide/mide.component';
import { SelectragosComponent} from './mide/selectragos/selectragos.component'
import { PanelComponent } from './panel/panel.component'


import { ContadortragosService} from './mide/contadortragos.service'

import {VistaRoutingModule} from './vista-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ModuloMaterial,
    FormsModule,
    ReactiveFormsModule,
    VistaRoutingModule
  ],
  declarations: [
    MideComponent,
    VistaComponent,
    MetasComponent,
    SelectragosComponent,
    PanelComponent

  ],
  providers: [ ContadortragosService ]
})
export class VistaModule {}
