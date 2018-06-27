import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NavegacionComponent} from './navegacion/navegacion.component'

const routes: Routes = [

  {
    path: '',
    component: NavegacionComponent   },
   {
    path: '**', redirectTo: '' }
 ];

@NgModule({
   imports: [RouterModule.forRoot(routes),
   // NgbModule,
 ],
   exports: [RouterModule],
   providers: []
 })
 export class OHRoutingModule { }
