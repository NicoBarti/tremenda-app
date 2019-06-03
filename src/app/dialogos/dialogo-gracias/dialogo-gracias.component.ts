import { Component } from '@angular/core';
import  {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-dialogo-gracias',
  templateUrl: './dialogo-gracias.component.html'
})
export class DialogoGraciasComponent {

respuesta: boolean = false

  constructor(public dialogRef: MatDialogRef<DialogoGraciasComponent>){}

    onNoClick(): void {
        this.dialogRef.close(this.respuesta);
      }
}
