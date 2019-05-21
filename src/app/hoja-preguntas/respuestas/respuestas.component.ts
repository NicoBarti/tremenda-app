import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  constructor() { }

  respuestaForm: FormGroup;

  ngOnInit() {
    this.respuestaForm  = new FormGroup({
      'item': new FormControl('', Validators.required)
    })
  }

}
