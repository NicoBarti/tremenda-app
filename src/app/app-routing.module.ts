import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PanelComponent} from './panel/panel.component'

import {InfoComponent} from './info/info.component'

const routes: Routes = [

  {path: 'panel',
  component: PanelComponent},
  {path: 'info',
  component: InfoComponent},
  {path: '**', redirectTo: 'panel' }
 ];

@NgModule({
   imports: [RouterModule.forRoot(routes),
   // NgbModule,
 ],
   exports: [RouterModule],
   providers: []
 })
 export class OHRoutingModule { }
