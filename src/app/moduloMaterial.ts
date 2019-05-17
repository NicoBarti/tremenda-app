import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatStepperModule } from '@angular/material';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon'

import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

// import {MatIconModule} from '@angular/material/icon';


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
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  // MatIconModule
],
  exports: [MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatStepperModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatSelectModule,
  // MatIconModule
],
})
export class ModuloMaterial { }
