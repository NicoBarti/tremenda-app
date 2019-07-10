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
// import {MatSnackBar } from '@angular/material';
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
  p2_touched: boolean
  p3detalle: boolean
  cuentaTragos: Subscription
  itemid:number

  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.respuestas = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.n = +params.get('n')
        this.respuestaForm.patchValue({item: this.almacen.get_alternativa(+params.get('n'))})

            if(this.n == 2){this.configuraP2()}else{this.p2 = false}
            if(this.n == 3){this.p3detalle = true}else{this.p3detalle = false}
        const d = new Date()
        this.tiempoInicio = d.getTime()
        this.itemid = this.cuestionarioService.get_itemid(+params.get('n'))
        return this.cuestionarioService.get_auditPregunta(+params.get('n'))
      }
      ))
   }

   ngOnDestroy() {
     // this.cuentaTragos.unsubscribe();
   }

  get item() { return this.respuestaForm.get('item')};

  enviar(){
    const t = new Date()
    this.navega()
    this.almacen.guardaItem(this.itemid, this.respuestaForm.get('item').value, t.getTime() - this.tiempoInicio)
    this.respuestaForm.reset()
  }

  navega(){
    if(this.n > 9){this.finalizar()}
    else {
      this.router.navigate(['vista/mide', this.n + 1])
    }
  }

   retrocede(){
     if(this.n == 1){ return}
     this.router.navigate(['vista/mide', this.n - 1])
   }

   finalizar() {
     const dialogRef = this.dialog.open(DialogoGraciasComponent, {
       width: '250px',
     });

     dialogRef.afterClosed().subscribe(finaliza =>{
        if(finaliza){
          this.almacen.envia_listatragos();
          this.auth.logout();
          this.router.navigate(['usuario']);

        }
          return})
   }

configuraP2(){
  this.p2 = true;
  if(this.p2_touched){
    this.respuestaForm.patchValue({item: this.tragosService.get_calculoTragos()});
    }
  this.cuentaTragos = this.tragosService.tragos_totales$.subscribe(
    datos => {this.respuestaForm.patchValue({item: datos});
    this.p2_touched = true
  })


}

}
