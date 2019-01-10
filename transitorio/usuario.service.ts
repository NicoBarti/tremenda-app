import { Injectable } from '@angular/core';
// import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';
import {Jsonp} from '@angular/http';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsuarioService {

  constructor(
    // private _tokenService: Angular2TokenService,
              private router: Router,
              private http: HttpClient) {
    // this._tokenService.init({
    //   registerAccountPath: '/api/auth',
    //   validateTokenPath: '/api/auth/validate_token',
    //   signInPath: '/api/auth/sign_in',
    // });
  };

  // userinfo = new Userinfo('','')

  signIn(params) {
  //   this._tokenService.signIn(params).subscribe(res => {
  //     // this.set_userInfo(res)
  //     this.router.navigate(['auditc/p1']);
  //   },
  //   err => {
  //     this.router.navigate(['/sign-in/nu'])
  //   }
  // );
  console.log('falta implementar singin')
  };

  registerAccount(params) {
      // this._tokenService.registerAccount(params).subscribe(res => {
        // this.set_userInfo(res)
        // this.router.navigate(['auditc/p1']);
      // });
      console.log('pendiente implementar regiter account')
  };

  graba_audit(audit) {
    let body = JSON.stringify({audit: audit});
      this.http
        .post('/api/audits', body, {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
        .subscribe(res => {console.log(res)})
  }


  get_userInfo() {
    // : Observable<any>
      // return  this._tokenService.get('/api/auth/validate_token')
      console.log('falta implementar get user')
  };

}
