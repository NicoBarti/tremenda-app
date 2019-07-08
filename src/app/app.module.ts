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

@NgModule({
  declarations: [
    AppComponent,
    DialogoGraciasComponent,
    UsuarioComponent,
    BienvenidaComponent,
    HojaPreguntasComponent,
    P2Component,
    Selectorp2Component
  ],
  entryComponents: [
    DialogoGraciasComponent,
    Selectorp2Component
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
