import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogoarticuloComponent } from './dialogoarticulo/dialogoarticulo.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';
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
import { Ejercicio14Component } from './ejercicio14/ejercicio14.component';
import { Ejercicio15Component } from './ejercicio15/ejercicio15.component';
import { Ejercicio16Component } from './ejercicio16/ejercicio16.component';
import { Ejercicio17Component } from './ejercicio17/ejercicio17.component';
import { Ejercicio18Component } from './ejercicio18/ejercicio18.component';
import { Ejercicio19Component } from './ejercicio19/ejercicio19.component';
import { Ejercicio20Component } from './ejercicio20/ejercicio20.component';
import { Ejercicio21Component } from './ejercicio21/ejercicio21.component';
import { Ejercicio22Component } from './ejercicio22/ejercicio22.component';

const routes: Routes = [
  {
    path: 'ejercicio1',
    component: Ejercicio1Component
  },
  {
    path: 'ejercicio2',
    component: Ejercicio2Component
  },
  {
    path: 'ejercicio3',
    component: Ejercicio3Component
  },
  {
    path: 'ejercicio4',
    component: Ejercicio4Component
  },
  {
    path: 'ejercicio5',
    component: Ejercicio5Component
  },
  {
    path: 'ejercicio6',
    component: Ejercicio6Component
  },
  {
    path: 'ejercicio7',
    component: Ejercicio7Component
  },
  {
    path: 'ejercicio8',
    component: Ejercicio8Component
  },
  {
    path: 'ejercicio9',
    component: Ejercicio9Component
  },
  {
    path: 'ejercicio10',
    component: Ejercicio10Component
  },
  {
    path: 'ejercicio11',
    component: Ejercicio11Component
  },
  {
    path: 'ejercicio12',
    component: Ejercicio12Component
  },
  {
    path: 'ejercicio13',
    component: Ejercicio13Component
  },
  {
    path: 'ejercicio14',
    component: Ejercicio14Component
  },
  {
    path: 'ejercicio15',
    component: Ejercicio15Component
  },
  {
    path: 'ejercicio16',
    component: Ejercicio16Component
  },
  {
    path: 'ejercicio17',
    component: Ejercicio17Component
  },
  {
    path: 'ejercicio18',
    component: Ejercicio18Component
  },
  {
    path: 'ejercicio19',
    component: Ejercicio19Component
  },
  {
    path: 'ejercicio20',
    component: Ejercicio20Component
  },
  {
    path: 'ejercicio21',
    component: Ejercicio21Component
  },
  {
    path: 'ejercicio22',
    component: Ejercicio22Component
  },
  {
    path: 'dialogoarticulo',
    component: DialogoarticuloComponent
  },
  {
    path: 'juegodados',
    component: JuegodadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
