import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { MetasComponent } from './metas/metas.component';
import { VistaComponent } from './vista.component';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ExplicacionComponent } from './bienvenida/explicacion/explicacion.component'

import { PerfilConsumoService } from './servicios/perfil-consumo.service'

// import { MideModule } from './mide/mide.module'
// import { MetasModule} from './metas/metas.module'
import {VistaModule} from './vista.module';
// import { ConsejosComponent } from './consejos/consejos.component';
// import { BajoComponent } from './consejos/bajo/bajo.component';
// import { MedioComponent } from './consejos/medio/medio.component';
// import { AltoComponent } from './consejos/alto/alto.component';

import { DialogoMidaPrimeroComponent } from './consejos/dialogo-mida-primero/dialogo-mida-primero.component'
import { DialogoNoAlcoholComponent } from './mide/dialogo-no-alcohol/dialogo-no-alcohol.component';
import { DialogoGraciasComponent } from './mide/dialogo-gracias/dialogo-gracias.component';


import { DatosComponent } from './datos/datos.component'

import { UsuarioComponent } from './usuario/usuario.component'


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    // PanelComponent,
    InfoComponent,
    ListatragosComponent,
    DialogoNoAlcoholComponent,
    DialogoMidaPrimeroComponent,
    DialogoGraciasComponent,
    // BajoComponent,
    // MedioComponent,
    // AltoComponent,
    // ConsejosComponent,
    // VistaComponent
    DatosComponent,
    UsuarioComponent,
    BienvenidaComponent,
    ExplicacionComponent
  ],
  entryComponents: [
    DialogoNoAlcoholComponent,
    DialogoMidaPrimeroComponent,
    DialogoGraciasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ModuloMaterial,
    FormsModule,
    ReactiveFormsModule,
    VistaModule,
    // MideModule,
    // MetasModule,
    OHRoutingModule,
    // NgbModule.forRoot()

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
