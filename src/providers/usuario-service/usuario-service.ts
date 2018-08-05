import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../app/models/usuario';

import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioServiceProvider {

  public apiUrl:string = 'http://192.168.15.17:8080/api';

  private usuarioLogado: Usuario;

  constructor(private _http: HttpClient) {
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
