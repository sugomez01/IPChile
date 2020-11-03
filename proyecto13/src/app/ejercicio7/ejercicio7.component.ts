import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component implements OnInit {

  valor1=null;
  valor2=null;
  resultado=null;
  opcion1=false;
  opcion2=false;
  opcion3=false;
  opcion4=false;

  
  operar() {
    this.resultado='';
    if (this.opcion1) {
      let ope = this.valor1 + this.valor2;
      this.resultado+=`La suma es ${ope} `;
    }
    if (this.opcion2) {
      let ope = this.valor1 - this.valor2;
      this.resultado+=`La resta es ${ope} `;
    }
    if (this.opcion3) {
      let ope = this.valor1 * this.valor2;
      this.resultado+=`El producto es ${ope} `;
    }
    if (this.opcion4) {
      let ope = this.valor1 / this.valor2;
      this.resultado+=`La division es ${ope} `;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
