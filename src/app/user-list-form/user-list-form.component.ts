import { Component, OnInit } from '@angular/core';
import { AtributosUsuario } from '../data/atributos-usuario';
import { UsuarioService } from '../api/usuario.service';

@Component({
  selector: 'app-user-list-form',
  templateUrl: './user-list-form.component.html',
  styleUrls: ['./user-list-form.component.scss']
})

export class UserListFormComponent implements OnInit {

  public pageTitle = 'Lista de Usuários';
  atributosUsuario: Array<AtributosUsuario>;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();
    console.log('atributosUsuario: ', this.atributosUsuario);
  }

  listarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(res => {
      this.atributosUsuario = res;
    }), (err) => {
      console.log('ERRO ao listar usuários.', err);
    }
  }

  searchText(dataSearch) {
    this.usuarioService.buscarUsuarioNome(dataSearch).subscribe(res => {
      if (res.length <= 0) {
        this.listarUsuarios();
      } else {
        this.atributosUsuario = res;
      }
    }), (err) => {
      console.log('ERRO ao buscar um usuário.', err);
    };
  }
}
