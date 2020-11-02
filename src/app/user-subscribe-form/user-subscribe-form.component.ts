import { Component, OnInit } from '@angular/core';
import { AtributosUsuario } from '../data/atributos-usuario';

@Component({
  selector: 'app-user-subscribe-form',
  templateUrl: './user-subscribe-form.component.html',
  styleUrls: ['./user-subscribe-form.component.css']
})

export class UserSettingsFormComponent implements OnInit {

  atributosUsuarioOriginal: AtributosUsuario = {
    id: null,
    nome: null,
    email: null,
    idade: null,
    login: null,
    senha: null,
    status: null
  }

  public pageTitle = 'Cadastro';

  atributosUsuario: AtributosUsuario = { ...this.atributosUsuarioOriginal };

  constructor() { }

  ngOnInit(): void {
  }

}
