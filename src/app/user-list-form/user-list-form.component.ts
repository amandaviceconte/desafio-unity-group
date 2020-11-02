import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-form',
  templateUrl: './user-list-form.component.html',
  styleUrls: ['./user-list-form.component.css']
})
export class UserListFormComponent implements OnInit {

  public pageTitle = 'Lista de Usuários';

  constructor() { }

  ngOnInit(): void {
    console.log('pageTitle: ', this.pageTitle);
  }

}
