import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatStepperModule } from '@angular/material';
import { ModuloMaterial} from './moduloMaterial'

import { OHRoutingModule } from './app-routing.module';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';

import { DialogoGraciasComponent } from './dialogos/dialogo-gracias/dialogo-gracias.component';

import { UsuarioComponent } from './auth/usuario/usuario.component'

import { HojaPreguntasComponent } from './hoja-preguntas/hoja-preguntas.component';
import { P2Component } from './hoja-preguntas/p2/p2.component';
import { Selectorp2Component } from './dialogos/selectorp2/selectorp2.component';
import { Detallep3Component } from './dialogos/detallep3/detallep3.component';
import { Confirma0tragosComponent } from './dialogos/confirma0tragos/confirma0tragos.component';
import { ErroreligibilidadComponent } from './dialogos/erroreligibilidad/erroreligibilidad.component';
import { ErrorValidacion3Component } from './dialogos/error-validacion3/error-validacion3.component';
import { ErrorValidacion2Component } from './dialogos/error-validacion2/error-validacion2.component';
import { InstruccionesInicialesComponent } from './ayuda/instrucciones-iniciales/instrucciones-iniciales.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogoGraciasComponent,
    UsuarioComponent,
    BienvenidaComponent,
    HojaPreguntasComponent,
    P2Component,
    Selectorp2Component,
    Detallep3Component,
    Confirma0tragosComponent,
    ErroreligibilidadComponent,
    ErrorValidacion3Component,
    ErrorValidacion2Component,
    InstruccionesInicialesComponent
  ],
  entryComponents: [
    DialogoGraciasComponent,
    Selectorp2Component,
    Confirma0tragosComponent,
    ErrorValidacion3Component,
    ErrorValidacion2Component,
    Detallep3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ModuloMaterial,
    FormsModule,
    ReactiveFormsModule,
    OHRoutingModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
