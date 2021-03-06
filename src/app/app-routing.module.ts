import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BienvenidaComponent} from './bienvenida/bienvenida.component'

import { UsuarioComponent } from './auth/usuario/usuario.component'

import { AuthGuard }                from './auth/auth.guard';

import { HojaPreguntasComponent } from './hoja-preguntas/hoja-preguntas.component'

import {ErroreligibilidadComponent} from './dialogos/erroreligibilidad/erroreligibilidad.component'

import {InstruccionesInicialesComponent} from './ayuda/instrucciones-iniciales/instrucciones-iniciales.component'

const routes: Routes = [
  { path: '',   redirectTo: '/vista', pathMatch: 'full' },
  {
    path: 'vista',
    canActivate: [AuthGuard],
    children: [
            {
              path: 'mide/:n',
              component: HojaPreguntasComponent,
              data: {animacion: 'HojaPreguntasAnimacion'}
            },
            { path: 'ayuda',
              component: InstruccionesInicialesComponent,
              data: {animacion: 'InstruccionesInicialesAnimacion'}
            },
            {
              path: '',
              component: BienvenidaComponent,
              data: {animacion: 'BienvenidaAnimacion'}
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
