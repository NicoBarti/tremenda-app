import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetasComponent } from './metas.component';

const metasRoutes: Routes = [
      {path: 'metas', component: MetasComponent},
 ];

@NgModule({
   imports: [RouterModule.forChild(metasRoutes)
 ],
   exports: [RouterModule],
 })
 export class MetasRoutingModule { }
