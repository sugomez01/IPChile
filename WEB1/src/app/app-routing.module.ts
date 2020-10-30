import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './ejercicio7/ejercicio7.component';
import { Ejercicio8Component } from './ejercicio8/ejercicio8.component';
import { Ejercicio9Component } from './ejercicio9/ejercicio9.component';
import { Ejercicio10Component } from './ejercicio10/ejercicio10.component';
import { Ejercicio11Component } from './ejercicio11/ejercicio11.component';
import { Ejercicio12Component } from './ejercicio12/ejercicio12.component';
import { Ejercicio13Component } from './ejercicio13/ejercicio13.component';
import { DialogoarticuloComponent } from './dialogoarticulo/dialogoarticulo.component';

const routes: Routes = [
  {
    path:'ejercicio1',
    component:Ejercicio1Component
  },
  {
    path:'ejercicio2',
    component:Ejercicio2Component
  },
  {
    path:'ejercicio3',
    component:Ejercicio3Component
  },
  {
    path:'ejercicio4',
    component:Ejercicio4Component
  },
  {
    path:'ejercicio5',
    component:Ejercicio5Component
  },
  {
    path:'ejercicio6',
    component:Ejercicio6Component
  },
  {
    path:'ejercicio7',
    component:Ejercicio7Component
  },
  {
    path:'ejercicio8',
    component:Ejercicio8Component
  },
  {
    path:'ejercicio9',
    component:Ejercicio9Component
  },
  {
    path:'ejercicio10',
    component:Ejercicio10Component
  },
  {
    path:'ejercicio11',
    component:Ejercicio11Component
  },
  {
    path:'ejercicio12',
    component:Ejercicio12Component
  },
  {
    path:'ejercicio13',
    component:Ejercicio13Component
  },
  {
    path:'dialogoarticulo',
    component:DialogoarticuloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
