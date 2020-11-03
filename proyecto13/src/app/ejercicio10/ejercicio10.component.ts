import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ejercicio10',
  templateUrl: './ejercicio10.component.html',
  styleUrls: ['./ejercicio10.component.css'],
})
export class Ejercicio10Component implements OnInit {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [];
  dataSource = null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(
        new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000))
      );
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(
    public codigo: number,
    public descripcion: string,
    public precio: number
  ) {}

  /* 
  constructor() { }

  ngOnInit(): void {
  }
   */
}
