import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaComponent } from './vista.component'
import { MetasComponent } from './metas/metas.component';
import { MideComponent } from './mide/mide.component';
import { SelectragosComponent} from './mide/selectragos/selectragos.component'
import { PanelComponent } from './panel/panel.component'
import { BienvenidaComponent} from './bienvenida/bienvenida.component'

import { DatosComponent } from './datos/datos.component'

import { UsuarioComponent } from './usuario/usuario.component'

// import { ConsejosComponent } from './consejos/consejos.component'
// import { BajoComponent } from './consejos/bajo/bajo.component'
// import { MedioComponent } from './consejos/medio/medio.component'
// import { AltoComponent } from './consejos/alto/alto.component'

const vistaRoutes: Routes = [
  {
    path: 'vista',
    component: VistaComponent,
    children: [
      {
        path: 'mide',
        component: MideComponent
      },
      // {
      //   path: 'metas',
      //   component: MetasComponent
      // },
      // {
      //   path: 'consejos',
      //   component: ConsejosComponent,
      //   children: [
      //     {path: 'bajo',
      //     component: BajoComponent},
      //     {path: 'medio',
      //     component: MedioComponent},
      //     {path: 'alto',
      //     component: AltoComponent}
      //   ]
      // },
      {
        path: '',
        component: PanelComponent
      },
      {
        path: 'datos',
        component: DatosComponent
      },
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path: 'bienvenida',
        component: BienvenidaComponent
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
