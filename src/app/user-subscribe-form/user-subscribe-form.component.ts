import { Component, OnInit } from '@angular/core';
import { AtributosUsuario } from '../data/atributos-usuario';
import { AdminNodeProvider } from '../api/user.service';

@Component({
  selector: 'app-user-subscribe-form',
  templateUrl: './user-subscribe-form.component.html',
  styleUrls: ['./user-subscribe-form.component.css']
})

export class UserSettingsFormComponent implements OnInit {

  atributosUsuarioOriginal: AtributosUsuario = {
    nome: null,
    email: null,
    idade: null,
    login: null,
    senha: null,
    status: null
  }

  public pageTitle = 'Cadastro';

  atributosUsuario: AtributosUsuario = { ...this.atributosUsuarioOriginal };

  constructor(
    private adminNodeProvider: AdminNodeProvider
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submitado');
    // this.adminNodeProvider.adicionarUsuario(this.atributosUsuario).subscribe(res => {
      
    // }), (err) => {
    //   console.log('ERRO ao adicionar usuário: ', err);
    // }
  }

}
