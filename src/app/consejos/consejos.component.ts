import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef } from '@angular/material';

import {DialogoMidaPrimeroComponent} from './dialogo-mida-primero/dialogo-mida-primero.component'

import {PerfilConsumoService} from '../servicios/perfil-consumo.service'

@Component({
  template: '<router-outlet></router-outlet>'
})
export class ConsejosComponent implements OnInit {

  constructor( public dialog: MatDialog,
              private perfilConsumoService: PerfilConsumoService,
              private router: Router) { }

  ngOnInit() {
    if (this.perfilConsumoService.get_existePerfil() == false){this.dialogo()};

    if(this.perfilConsumoService.get_riesgo() == 'cero'){console.log('pendiente')}
    else if(this.perfilConsumoService.get_riesgo() == 'bajo'){this.router.navigate(['/vista/consejos/bajo'])}
    else if(this.perfilConsumoService.get_riesgo() == 'medio'){this.router.navigate(['/vista/consejos/medio'])}
    else if(this.perfilConsumoService.get_riesgo() == 'alto'){this.router.navigate(['/vista/consejos/alto'])}
  }

  dialogo():void {
    const dialogRef = this.dialog.open(DialogoMidaPrimeroComponent, {
      width: '250px',
    })
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/vista/mide'])
      }
    })

  }

}
