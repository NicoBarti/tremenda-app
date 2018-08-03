import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatStepperModule } from '@angular/material';
import { MatTableModule} from '@angular/material/table';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon'

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatStepperModule,
  // MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatDialogModule],
  exports: [MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatStepperModule,
  // MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatDialogModule],
})
export class ModuloMaterial { }
