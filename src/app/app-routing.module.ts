import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PanelComponent} from './panel/panel.component'

import {InfoComponent} from './info/info.component'
import {MideComponent} from './mide/mide.component'
import { SelectragosComponent } from './mide/selectragos/selectragos.component';


const routes: Routes = [

  {path: 'panel',
  component: PanelComponent},
  {path: 'info',
  component: InfoComponent},
  {path: 'mide',
  component: MideComponent,        },
  {path: 'p2',
  component: SelectragosComponent},

  {path: '**', redirectTo: 'panel' },
 ];

@NgModule({
   imports: [RouterModule.forRoot(routes),
   // NgbModule,
 ],
   exports: [RouterModule],
   providers: []
 })
 export class OHRoutingModule { }
