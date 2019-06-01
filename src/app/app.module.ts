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
import { ListatragosComponent } from './listatragos/listatragos.component';
import { MideComponent } from './mide/mide.component';
import { SelectragosComponent } from './mide/selectragos/selectragos.component';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';

import { PerfilConsumoService } from './servicios/perfil-consumo.service'


import { DialogoNoAlcoholComponent } from './mide/dialogo-no-alcohol/dialogo-no-alcohol.component';
import { DialogoGraciasComponent } from './mide/dialogo-gracias/dialogo-gracias.component';

import { UsuarioComponent } from './auth/usuario/usuario.component'

import {MideModule} from './mide/mide.module';
import { HojaPreguntasComponent } from './hoja-preguntas/hoja-preguntas.component';
import { EncabezadoComponent } from './hoja-preguntas/encabezado/encabezado.component';
import { RespuestasComponent } from './hoja-preguntas/respuestas/respuestas.component'

@NgModule({
  declarations: [
    AppComponent,
    ListatragosComponent,
    DialogoNoAlcoholComponent,
    DialogoGraciasComponent,
    UsuarioComponent,
    BienvenidaComponent,
    HojaPreguntasComponent,
    EncabezadoComponent,
    RespuestasComponent
  ],
  entryComponents: [
    DialogoNoAlcoholComponent,
    DialogoGraciasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ModuloMaterial,
    MideModule,
    FormsModule,
    ReactiveFormsModule,
    OHRoutingModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
