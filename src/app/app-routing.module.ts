import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
