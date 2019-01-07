import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ModuloMaterial} from '../moduloMaterial'

// import { MetasComponent } from './metas.component';

import { MetasRoutingModule } from './metas-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ModuloMaterial,
    MetasRoutingModule
  ],
  declarations: [
    // MetasComponent,

  ],
  providers: [  ]
})
export class MetasModule {}
