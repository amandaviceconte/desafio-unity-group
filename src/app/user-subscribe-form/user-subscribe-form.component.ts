import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-subscribe-form',
  templateUrl: './user-subscribe-form.component.html',
  styleUrls: ['./user-subscribe-form.component.css']
})

export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    id: null,
    nome: null,
    email: null,
    idade: null,
    login: null,
    senha: null,
    status: null
  }

  public pageTitle = 'Cadastro';

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

}
