import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable, Subscription} from 'rxjs';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { trigger, style, animate, state, transition, AnimationEvent} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CuestionarioService} from './cuestionario/cuestionario.service'
import {Preguntas} from './cuestionario/preguntas'
import {AlmecenResultadosService} from '../datos/almecen-resultados.service'
import { DialogoGraciasComponent } from '../dialogos/dialogo-gracias/dialogo-gracias.component'
import {MatDialog, MatDialogRef } from '@angular/material';
// import {MatSnackBar } from '@angular/material';
import {AuthService} from '../auth/auth.service'
import {ContadorTragosService} from './p2/contador-tragos.service'
import {ValidacionService} from './validacion.service'

import {Detallep3Component} from '../dialogos/detallep3/detallep3.component'

@Component({
  selector: 'app-hoja-preguntas',
  templateUrl: './hoja-preguntas.component.html',
  styleUrls: ['./hoja-preguntas.component.css'],
  animations: [
    trigger('cajaDePreguntaAnimacion', [
      state('entra', style({ opacity: 1 })),
      state('sale', style({ opacity: 0})),
     transition('* => entra', [
         style({ opacity: 0 }),
       animate('250ms ease-in')
    ]),
    transition('* => sale', [
      style({opacity: 1}),
      animate('250ms ease-out')
    ])
    ])
  ]
})

export class HojaPreguntasComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cuestionarioService: CuestionarioService,
    private almacen: AlmecenResultadosService,
    public dialog: MatDialog,
    private auth: AuthService,
    private tragosService: ContadorTragosService,
    private valida:ValidacionService
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
  texto_comp: string
  teAnimo: boolean
  avanzar: boolean
  retroceder: boolean
  primeraVuelta3: boolean = true

  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.respuestas = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.n = +params.get('n')
        this.texto_comp = null
        this.avanzar = false
        this.retroceder = false
        this.teAnimo = true
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
    // Primero ejecuta validacion que deluelve true si es valido; si no es válido devuelde false y se detiene el flujo enviar
    if(this.valida.es_valida(this.itemid, this.respuestaForm.get('item').value)){
      const t = new Date()
      this.navega()
      this.almacen.guardaItem(this.itemid, this.respuestaForm.get('item').value, t.getTime() - this.tiempoInicio)
      this.respuestaForm.reset()
    }
  }

  navega(){
    if(this.n > 9){this.finalizar(); return}
    this.avanzar = true
    this.teAnimo = false
    // if(this.n > 9){this.finalizar()}
    // else {
    //   this.router.navigate(['vista/mide', this.n + 1])
    // }
  }

  terminaAnimacion() {
    if(this.avanzar == true) {
      if(this.n > 9){
        this.finalizar();
        return}
      else {
        this.router.navigate(['vista/mide', this.n + 1]);
        return
      }
    }
    if(this.retroceder == true) {
      this.router.navigate(['vista/mide', this.n - 1]);
      return
    }
    if(this.n == 3 && this.primeraVuelta3){this.abrep3detalle()}
  }

   retrocede(){
     if(this.n == 1){ return}
     this.retroceder = true
     this.teAnimo = false
     // if(this.n == 1){ return}
     // this.router.navigate(['vista/mide', this.n - 1])
   }

   finalizar() {
     const dialogRef = this.dialog.open(DialogoGraciasComponent, {
       width: '450px'
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
  const texto = this.cuestionarioService.get_texto_pregunta(this.n-1, this.almacen.get_alternativa(this.n-1))
if(texto){
  this.texto_comp = 'En los últimos 12 meses, usted ha consumo alcohol ' + texto.charAt(0).toLowerCase() + texto.slice(1) + '.'
}

  if(this.p2_touched){
    this.respuestaForm.patchValue({item: this.tragosService.get_calculoTragos()});
    }
  this.cuentaTragos = this.tragosService.tragos_totales$.subscribe(
    datos => {this.respuestaForm.patchValue({item: datos});
    this.p2_touched = true
  })
}

abrep3detalle(){
  const dialogRef = this.dialog.open(Detallep3Component, {
    width: '450px;'
  });

  dialogRef.afterClosed().subscribe(hola=>{
    this.primeraVuelta3 = false
  }

  )

}

}
