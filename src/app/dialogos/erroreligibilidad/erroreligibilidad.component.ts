import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-erroreligibilidad',
  templateUrl: './erroreligibilidad.component.html',
  styleUrls: ['./erroreligibilidad.component.css']
})
export class ErroreligibilidadComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.logout()
  }

  fin() {
    this.router.navigate(['/usuario']);
  }

}
