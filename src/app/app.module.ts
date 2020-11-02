import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-subscribe-form/user-subscribe-form.component';
import { UserListFormComponent } from './user-list-form/user-list-form.component';
import { AdminNodeProvider } from './api/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    UserListFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UserListFormComponent, data: { pageName: 'Usuários'}},
      { path: 'usuarios', component: UserListFormComponent, data: { pageName: 'Usuários'}},
      { path: 'cadastro', component: UserSettingsFormComponent, data: { pageName: 'Cadastro'}}
    ])
  ],
  providers: [AdminNodeProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }
