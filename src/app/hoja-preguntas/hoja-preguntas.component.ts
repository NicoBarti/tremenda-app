import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable, Subscription} from 'rxjs';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import {CuestionarioService} from './cuestionario/cuestionario.service'
import {Preguntas} from './cuestionario/preguntas'
import {AlmecenResultadosService} from '../datos/almecen-resultados.service'
import { DialogoGraciasComponent } from '../dialogos/dialogo-gracias/dialogo-gracias.component'
import {MatDialog, MatDialogRef } from '@angular/material';
import {MatSnackBar } from '@angular/material';
import {AuthService} from '../auth/auth.service'
import {ContadorTragosService} from './p2/contador-tragos.service'

@Component({
  selector: 'app-hoja-preguntas',
  templateUrl: './hoja-preguntas.component.html',
  styleUrls: ['./hoja-preguntas.component.css']
})
export class HojaPreguntasComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cuestionarioService: CuestionarioService,
    private almacen: AlmecenResultadosService,
    public dialog: MatDialog,
    private auth: AuthService,
    private tragosService: ContadorTragosService
  ) { }

  respuestaForm: FormGroup;
  respuestas:Observable<Preguntas>
  tiempoInicio:number
  n:number
  p2:boolean
  d = new Date()
  cuentaTragos: Subscription

  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.respuestas = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.n = +params.get('n')
        if(this.n == 2){this.configuraP2()}else{this.p2 = false}
        this.respuestaForm.patchValue({item: this.almacen.get_alternativa(+params.get('n'))})
        this.tiempoInicio = this.d.getTime()
        return this.cuestionarioService.get_auditPregunta(+params.get('n'))
      }
      ))
   }

   ngOnDestroy() {
     this.cuentaTragos.unsubscribe();
   }

  get item() { return this.respuestaForm.get('item')};

  enviar(){
    this.navega()
    this.almacen.guardaItem(this.n, this.respuestaForm.get('item').value, this.d.getTime() - this.tiempoInicio)
    this.respuestaForm.reset()
  }

  navega(){
    if(this.n > 9){
      this.gracias();
      this.auth.logout();
      this.router.navigate(['usuario'])
      return}
    this.router.navigate(['vista/mide', this.n + 1])
  }

   retrocede(){
     if(this.n == 1){ return}
     this.router.navigate(['vista/mide', this.n - 1])
   }

   gracias() {
     const dialogRef = this.dialog.open(DialogoGraciasComponent, {
       width: '250px',
     });
   }

configuraP2(){
  this.p2 = true;
  this.cuentaTragos = this.tragosService.tragos_totales$.subscribe(
    datos => this.respuestaForm.patchValue({item: datos}))
}

}
