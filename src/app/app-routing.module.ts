import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaComponent} from './bienvenida/bienvenida.component'

import { UsuarioComponent } from './auth/usuario/usuario.component'

import { AuthGuard }                from './auth/auth.guard';

import { HojaPreguntasComponent } from './hoja-preguntas/hoja-preguntas.component'

import {ErroreligibilidadComponent} from './dialogos/erroreligibilidad/erroreligibilidad.component'

const routes: Routes = [
  { path: '',   redirectTo: '/vista', pathMatch: 'full' },
  {
    path: 'vista',
    canActivate: [AuthGuard],
    children: [
            {
              path: 'mide/:n',
              component: HojaPreguntasComponent
            },
            {
              path: '',
              component: BienvenidaComponent
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
      path: 'eligibilidad0',
      component: ErroreligibilidadComponent
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
