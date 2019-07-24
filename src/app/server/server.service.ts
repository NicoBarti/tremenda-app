import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
// import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Usuario } from '../auth/usuario/usuario'
import { ContadorTragosService } from '../hoja-preguntas/p2/contador-tragos.service'

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient
              // private tragosService: ContadorTragosService
            )
              { }

// usar esta linea en development
base_url = "/api"

// usar esta linea para producción
// base_url = "https://whispering-journey-32807.herokuapp.com"

currentUserId: number

envia_usuario(usuario: Usuario) {
  let body = JSON.stringify({user: usuario});
  console.log(body)
  this.http.post(this.base_url + '/users', body, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')})
  .subscribe(res => {this.currentUserId = res['id'],
                      console.log(res)
                    })
}

envia_item(item) {
  let body = JSON.stringify({item: item});
  console.log(body)
  this.http.post(this.base_url + '/users/' + this.currentUserId + '/items', body, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')})
  .subscribe(res => {
    console.log(res)
    res => {return}
  })
}


// envia_listatragos():void {
//  console.log(this.tragosService.get_lista_tragos())
// }

enviaP2detalle(lista): boolean {
var i
for( i = 0; i < lista.length; i++){
  let body = JSON.stringify({list: {nombre: lista[i].nombre, cant: lista[i].cant, eq: lista[i].eq, indx: lista[i].indx}});
  console.log(body)
  this.http.post(this.base_url + '/users/' + this.currentUserId + '/lists', body, {
    headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(res => {
        console.log(res)
        res => {return}
      })
}
return true
}


}
