import { Injectable } from '@angular/core';
import { Agendamento } from '../../app/models/agendamento';
import { Observable } from 'rxjs/Observable';

import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(private storage: Storage) {
  }

  gerarChave(agendamento: Agendamento): string {
    return agendamento.emailCliente + agendamento.data.substr(0,10);
  }

  salvar(agendamento: Agendamento): Observable<any>{
    let chave = this.gerarChave(agendamento);
    let promise = this.storage.set(chave, agendamento);
    return Observable.fromPromise(promise);
  }
  
  jaExiste(agendamento: Agendamento): Observable<boolean>{
    let chave = this.gerarChave(agendamento);
    let promise = this.storage.get(chave).then(existe => existe ? true : false);
    return Observable.fromPromise(promise);
  }

  listaTodos(): Observable<Agendamento[]> {
    let agendamentos: Agendamento[] = []

    let promise: Promise<Agendamento[]> = 
      this.storage.forEach((agendamento: Agendamento) => {
        agendamentos.push(agendamento);
      })
      .then(() => agendamentos);

    return Observable.fromPromise(promise);
  }

}
