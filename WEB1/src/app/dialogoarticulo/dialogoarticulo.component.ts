import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Articulo} from '../articulo';

@Component({
  selector: 'app-dialogoarticulo',
  templateUrl: './dialogoarticulo.component.html',
  styleUrls: ['./dialogoarticulo.component.css']
})
export class DialogoarticuloComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogoarticuloComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Articulo) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }
/* 
  constructor() { }

  ngOnInit(): void {
  }
 */
}
