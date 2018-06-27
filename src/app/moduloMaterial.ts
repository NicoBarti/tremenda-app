import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule, MatFormFieldModule} from '@angular/material'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
          MatSelectModule, MatFormFieldModule,
        MatInputModule,
      MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,
          MatSelectModule, MatFormFieldModule,
        MatInputModule,
      MatCardModule],
})
export class ModuloMaterial { }
