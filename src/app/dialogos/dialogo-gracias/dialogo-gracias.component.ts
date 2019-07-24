import { Component, Inject, ViewEncapsulation } from '@angular/core';
import  {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-dialogo-gracias',
  templateUrl: './dialogo-gracias.component.html',
  styleUrls: ['./dialogo-gracias.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogoGraciasComponent {

finaliza: boolean = true

  constructor(public dialogRef: MatDialogRef<DialogoGraciasComponent>,
){}

    onNoClick(): void {
        this.dialogRef.close(!this.finaliza);
      }
}
