import { Component, OnInit,ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-ejercicio11',
  templateUrl: './ejercicio11.component.html',
  styleUrls: ['./ejercicio11.component.css']
})
export class Ejercicio11Component implements OnInit {

  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [];
  dataSource = null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    for (let x = 1; x <= 10; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.sort = this.sort;
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }

/* 
  constructor() { }

  ngOnInit(): void {
  }
   */

}
