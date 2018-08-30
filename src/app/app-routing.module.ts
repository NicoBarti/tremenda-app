import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '',
  // component: VistaComponent,
  // children: [
  //     {path: 'panel',
  //     component: PanelComponent},
  //     // {path: 'info',
  //     // component: InfoComponent},
  //     // // {path: 'mide',
  //     // // component: MideComponent},
  //     // {path: 'p2',
  //     // component: SelectragosComponent},
  //     // {path: 'metas',
  //     // component: MetasComponent},
  // ]},
  { path: '',   redirectTo: '/vista', pathMatch: 'full' },
  // { path: '**', component: PanelComponent },
 ];

@NgModule({
   imports: [RouterModule.forRoot(routes,
// { enableTracing: true } //borrar solo debug
   ),
   // NgbModule,
 ],
   exports: [RouterModule],
   providers: []
 })
 export class OHRoutingModule { }
