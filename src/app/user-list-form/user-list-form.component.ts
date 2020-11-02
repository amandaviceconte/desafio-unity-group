import { Component, OnInit } from '@angular/core';
import { AtributosUsuario } from '../data/atributos-usuario';
import { AdminNodeProvider } from '../api/user.service';

@Component({
  selector: 'app-user-list-form',
  templateUrl: './user-list-form.component.html',
  styleUrls: ['./user-list-form.component.css']
})

export class UserListFormComponent implements OnInit {

  public pageTitle = 'Lista de Usuários';
  atributosUsuario: Array<AtributosUsuario>;

  constructor(
    private adminNodeProvider: AdminNodeProvider
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();
    console.log('atributosUsuario: ', this.atributosUsuario);
  }

  listarUsuarios() {
    this.adminNodeProvider.listarUsuarios().subscribe(res => {
      this.atributosUsuario = res;
    }), (err) => {
      console.log('ERRO ao listar usuários: ', err);
    }
  }
}
