import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../app/models/usuario';

import 'rxjs/add/operator/map';
import { ApiProvider } from '../api/api';

@Injectable()
export class UsuarioServiceProvider {

  private usuarioLogado: Usuario;
  private apiUrl: string;

  constructor(private _http: HttpClient, private api: ApiProvider) {
    this.apiUrl = this.api.getUrl();
  }

  login(email, senha){
    return this._http
      .post<Usuario>(this.apiUrl.concat('/login'), {email: email, senha: senha})
      .do((usuario: Usuario) => this.usuarioLogado = usuario)
  }

  obtemUsuarioLogado(): Usuario {
    return this.usuarioLogado;
  }

}
