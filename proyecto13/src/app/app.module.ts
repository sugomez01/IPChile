import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { Ejercicio14Component } from './ejercicio14/ejercicio14.component';
import { Ejercicio15Component } from './ejercicio15/ejercicio15.component';
import { Ejercicio16Component } from './ejercicio16/ejercicio16.component';
import { Ejercicio17Component } from './ejercicio17/ejercicio17.component';
import { Ejercicio18Component } from './ejercicio18/ejercicio18.component';
import { Ejercicio19Component } from './ejercicio19/ejercicio19.component';
import { Ejercicio20Component } from './ejercicio20/ejercicio20.component';
import { Ejercicio21Component } from './ejercicio21/ejercicio21.component';
import { Ejercicio22Component } from './ejercicio22/ejercicio22.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { DadoComponent } from './dado/dado.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    BarralateralComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component,
    Ejercicio6Component,
    Ejercicio7Component,
    Ejercicio8Component,
    Ejercicio9Component,
    Ejercicio10Component,
    Ejercicio11Component,
    Ejercicio12Component,
    Ejercicio13Component,
    DialogoarticuloComponent,
    Ejercicio14Component,
    Ejercicio15Component,
    Ejercicio16Component,
    Ejercicio17Component,
    Ejercicio18Component,
    Ejercicio19Component,
    Ejercicio20Component,
    Ejercicio21Component,
    Ejercicio22Component,
    JuegodadosComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
