import { Component, OnInit } from '@angular/core';
import { AtributosUsuario } from '../data/atributos-usuario';
import { UsuarioService } from '../api/usuario.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-subscribe-form',
  templateUrl: './user-subscribe-form.component.html',
  styleUrls: ['./user-subscribe-form.component.scss']
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
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  formValidate(formObj) {
    if (!formObj.nome || formObj.nome === '') {
      return true;
    } else if (!formObj.email || formObj.email === '') {
      return true;
    } else if (!formObj.idade || formObj.idade === '') {
      return true;
    } else if (!formObj.login || formObj.login === '') {
      return true;
    } else if (!formObj.senha || formObj.senha === '') {
      return true;
    } else if (!formObj.status || formObj.status === '') {
      return true;
    }
    return false;
  }

  redirect() {
    this.router.navigate(['/usuarios']);
  }

  onSubmit(form: NgForm) {
    if (this.formValidate(form.value)) return;

    this.usuarioService.adicionarUsuario(form.value).subscribe(res => {
      this.redirect();
    }), (err) => {
      console.log('ERRO ao adicionar usuário: ', err);
    }
  }

}
