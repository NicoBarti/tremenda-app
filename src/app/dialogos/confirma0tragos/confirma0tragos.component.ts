import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import  {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirma0tragos',
  templateUrl: './confirma0tragos.component.html',
  styleUrls: ['./confirma0tragos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Confirma0tragosComponent implements OnInit {

cerotragos: boolean = true

  constructor(
    public dialogRef: MatDialogRef<Confirma0tragosComponent>
  ) { }

  ngOnInit() {
  }

}
