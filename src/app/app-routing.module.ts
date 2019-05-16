import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MideComponent } from './mide/mide.component';
import { SelectragosComponent} from './mide/selectragos/selectragos.component'
// import { PanelComponent } from './panel/panel.component'

import { BienvenidaComponent} from './bienvenida/bienvenida.component'
import { ExplicacionComponent} from './bienvenida/explicacion/explicacion.component'

import { DatosComponent } from './datos/datos.component'

import { UsuarioComponent } from './auth/usuario/usuario.component'

import { AuthGuard }                from './auth/auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/vista', pathMatch: 'full' },
  {
    path: 'vista',
    canActivate: [AuthGuard],
    children: [
            {
              path: 'mide',
              component: MideComponent
            },
            // {
            //   path: 'panel',
            //   component: PanelComponent
            // },
            {
              path: 'datos',
              component: DatosComponent
            },
            {
              path: '',
              component: BienvenidaComponent
            },
            {
              path: '1',
              component: ExplicacionComponent
            },
            {
              path: '**',
              component: BienvenidaComponent
            }
    ]},
    {
      path: 'usuario',
      component: UsuarioComponent
    },
    {
      path: '**',
      redirectTo: '/vista'
    }
 ];




@NgModule({
   imports: [RouterModule.forRoot(routes,
// { enableTracing: true } //borrar solo debug
   ),
 ],
   exports: [RouterModule],
   providers: []
 })
 export class OHRoutingModule { }
