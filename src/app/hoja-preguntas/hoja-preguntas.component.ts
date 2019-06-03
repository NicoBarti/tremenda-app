import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import {CuestionarioService} from './cuestionario/cuestionario.service'
import {Preguntas} from './cuestionario/preguntas'
import {AlmecenResultadosService} from '../datos/almecen-resultados.service'
import { DialogoGraciasComponent } from '../dialogos/dialogo-gracias/dialogo-gracias.component'
import {MatDialog, MatDialogRef } from '@angular/material';
import {MatSnackBar } from '@angular/material';

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
  ) { }

  respuestaForm: FormGroup;
  respuestas:Observable<Preguntas>
  tiempoInicio:number
  n:number
  d = new Date()

  ngOnInit() {
    this.respuestaForm  = new FormGroup({'item': new FormControl('', Validators.required)})

    this.respuestas = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.n = +params.get('n')
        this.respuestaForm.patchValue({item: this.almacen.get_alternativa(+params.get('n'))})
        this.tiempoInicio = this.d.getTime()
        return this.cuestionarioService.get_auditPregunta(+params.get('n'))
      }
      ))
   }

  get item() { return this.respuestaForm.get('item')};

  enviar(){
    this.navega()
    this.almacen.guardaItem(this.n, this.respuestaForm.get('item').value, this.d.getTime() - this.tiempoInicio)
    this.respuestaForm.reset()
  }

  navega(){
    if(this.n > 9){
      this.gracias()
      return}
    this.router.navigate(['vista/mide', this.n + 1])
  }

   retrocede(){
     if(this.n == 1){
       console.log('inicio')
       return}
     this.router.navigate(['vista/mide', this.n - 1])
   }

   gracias() {
     const dialogRef = this.dialog.open(DialogoGraciasComponent, {
       width: '250px',
     });
   }

}
