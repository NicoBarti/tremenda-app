import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MideComponent} from './mide.component'

const mideRoutes: Routes = [
      {path: 'mide', component: MideComponent},
 ];

@NgModule({
   imports: [RouterModule.forChild(mideRoutes)
 ],
   exports: [RouterModule],
 })
 export class MideRoutingModule { }
