import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';;
import { Observable } from 'rxjs';

import { AtributosUsuario } from '../data/atributos-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlLocal: string = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    return this.http.get(`${this.urlLocal}/usuarios`);
  }

  buscarUsuarioNome(nome: any): Observable<any> {
    return this.http.get(`${this.urlLocal}/usuarios?nome=${nome}`);
  }

  adicionarUsuario(usuario: AtributosUsuario): Observable<AtributosUsuario> {
    return this.http.post<AtributosUsuario>(`${this.urlLocal}/usuarios`, usuario);
  }

}