import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuloMaterial} from './moduloMaterial'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuloMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
