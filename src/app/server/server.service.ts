import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
// import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Usuario } from '../auth/usuario/usuario'

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient) { }

envia_usuario(usuario: Usuario) {
  let body = JSON.stringify({user: usuario});
  this.http.post('https://whispering-journey-32807.herokuapp.com/users', body, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  })
  .subscribe(res => {console.log(res)})
}


}


  //
  // graba_audit(audit) {
  //   let body = JSON.stringify({audit: audit});
  //     this.http
  //       .post('/api/audits', body, {
  //         headers: new HttpHeaders().set('Content-Type', 'application/json')
  //       })
  //       .subscribe(res => {console.log(res)})
  // }
