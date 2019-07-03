import { Component, OnInit, Inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common';

import {Usuario} from './usuario'
import {AlmecenResultadosService} from '../../datos/almecen-resultados.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  // usuario: Usuario[];
  opciones: FormGroup;

  constructor(public authService: AuthService,
              public router: Router,
              private almecenResultadosService:AlmecenResultadosService,
              @Inject(DOCUMENT) private document: any) {}
              elem;

  ngOnInit() {
    this.opciones = new FormGroup({
      sexo: new FormControl('', Validators.required),
      fnac: new FormControl('', Validators.required),
      userid: new FormControl('', Validators.required)
    });
    this.elem = document.documentElement;
  }

  enviar():void {
    this.almecenResultadosService.guardaUsuario(this.opciones.value)
    this.openFullscreen()
    this.login()
  }

  login() {
    this.authService.login().subscribe(() => {
      // this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        // let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/vista';

        // Redirect the user
        this.router.navigate(['vista'])

      }
    });
  }

  openFullscreen(){
    // if (this.elem.requestFullscreen) {
    //   this.elem.requestFullscreen();
    // } else if (this.elem.mozRequestFullScreen) {
    //   /* Firefox */
    //   this.elem.mozRequestFullScreen();
    // } else
    if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    }
    // else if (this.elem.msRequestFullscreen) {
    //   /* IE/Edge */
    //   this.elem.msRequestFullscreen();
    // }
  }

}
