import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agendamento } from '../../app/models/agendamento';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AgendamentosServiceProvider {

  public apiUrl:string = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) {
  }

  agendar(agendamento: Agendamento): Observable<any>{
    return this._http
      .post<any>(this.apiUrl.concat('/agendamento/agenda'), agendamento)
        .do(() => agendamento.enviado = true)
        .catch((err) => Observable.of(new Error('Não foi possível realizar o agendamento')));
  }

}
