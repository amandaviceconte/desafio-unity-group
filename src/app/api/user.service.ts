import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';;
import { Observable } from 'rxjs';

@Injectable()
export class AdminNodeProvider {

  urlLocal: string = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    return this.http.get(`${this.urlLocal}/usuarios`);
  }

  buscarUsuarioId(id: any): Observable<any> {
    return this.http.get(`${this.urlLocal}/usuarios/id/${id}`);
  }
}