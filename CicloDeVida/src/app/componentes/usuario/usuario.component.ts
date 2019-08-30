import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public listadoUsuarios: Array<Usuario> = Array<Usuario>();

  constructor() { }

  ngOnInit() {
  }

  AgregarUsuario() {
    let usuario = this.usuario;
    this.listadoUsuarios.push(usuario);
  }

}
