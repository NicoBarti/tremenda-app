import { Component } from '@angular/core';
import  {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-dialogo-no-alcohol',
  templateUrl: './dialogo-no-alcohol.component.html',
  styleUrls: ['./dialogo-no-alcohol.component.css']
})
export class DialogoNoAlcoholComponent {

respuesta: <boolean> = false

  constructor(public dialogRef: MatDialogRef<DialogoNoAlcoholComponent>){}

    onNoClick(): void {
        this.dialogRef.close(this.respuesta);
      }
}
