import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Agendamento } from '../../app/models/agendamento';
import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento-dao';

@IonicPage()
@Component({
  selector: 'page-lista-agendamento',
  templateUrl: 'lista-agendamento.html',
})
export class ListaAgendamentoPage {

  agendamentos: Agendamento[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dao: AgendamentoDaoProvider) { }

  ionViewDidLoad() {
    this.dao.listaTodos().subscribe(
      (agendamentos: Agendamento[]) => {
        this.agendamentos = agendamentos;
      },
      (error) => { console.log(error); }
    );
  }

}
