import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-ejercicio16',
  templateUrl: './ejercicio16.component.html',
  styleUrls: ['./ejercicio16.component.css']
})
export class Ejercicio16Component implements OnInit {
  usuario=null;

  constructor(private usuarioService: UsuarioService) {}  

  ngOnInit() {
    this.recuperarPersona();
  }  

  recargar() {
    this.recuperarPersona();
  }

  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe( result =>  {this.usuario = result});    
  }
}
