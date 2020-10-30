import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css']
})
export class Ejercicio6Component implements OnInit {

  slider1=0;
  slider2=0;
  slider3=0;
  suma=0;
  
  cambiar() {
    this.suma = this.slider1 + this.slider2 + this.slider3;    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
