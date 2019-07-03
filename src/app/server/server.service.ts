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

// base_url = "/api"
currentUserId: number
base_url = "https://whispering-journey-32807.herokuapp.com"

envia_usuario(usuario: Usuario) {
  let body = JSON.stringify({user: usuario});
  this.http.post(this.base_url + '/users', body, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')})
  .subscribe(res => {this.currentUserId = res['id']})
}

envia_item(item) {
  let body = JSON.stringify({item: item});
  this.http.post(this.base_url + '/users/' + this.currentUserId + '/items', body, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')})
  .subscribe(res => {return})
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
