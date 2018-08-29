import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatStepperModule } from '@angular/material';
import { ModuloMaterial} from './moduloMaterial'


import { OHRoutingModule } from './app-routing.module';
import { PanelComponent } from './panel/panel.component';
import { InfoComponent } from './info/info.component';
import { ListatragosComponent } from './listatragos/listatragos.component';
import { MideComponent } from './mide/mide.component';
import { SelectragosComponent } from './mide/selectragos/selectragos.component';
import { DialogoNoAlcoholComponent } from './mide/dialogo-no-alcohol/dialogo-no-alcohol.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PanelComponent,
    InfoComponent,
    ListatragosComponent,
    MideComponent,
    SelectragosComponent,
    DialogoNoAlcoholComponent
  ],
  entryComponents: [
    DialogoNoAlcoholComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ModuloMaterial,
    OHRoutingModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
