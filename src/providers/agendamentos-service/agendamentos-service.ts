import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agendamento } from '../../app/models/agendamento';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../api/api';

@Injectable()
export class AgendamentosServiceProvider {

  private apiUrl: string;

  constructor(private _http: HttpClient, private api: ApiProvider) {
    this.apiUrl = this.api.getUrl();
  }

  agendar(agendamento: Agendamento): Observable<any>{
    return this._http
      .post<any>(this.apiUrl.concat('/agendamento/agenda'), agendamento)
        .do(() => agendamento.enviado = true)
        .catch((err) => Observable.of(new Error('Não foi possível realizar o agendamento')));
  }

}
