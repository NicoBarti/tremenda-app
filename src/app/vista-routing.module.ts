import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaComponent } from './vista.component'
import { MetasComponent } from './metas/metas.component';
import { MideComponent } from './mide/mide.component';
import { SelectragosComponent} from './mide/selectragos/selectragos.component'
import { PanelComponent } from './panel/panel.component'


const vistaRoutes: Routes = [
  {
    path: 'vista',
    component: VistaComponent,
    children: [
      {
        path: 'mide',
        component: MideComponent
      },
      {
        path: 'metas',
        component: MetasComponent
      },
      {
        path: '',
        component: PanelComponent
      }
    ]
  }
]



@NgModule({
   imports: [RouterModule.forChild(vistaRoutes)
 ],
   exports: [RouterModule],
 })
 export class VistaRoutingModule { }
