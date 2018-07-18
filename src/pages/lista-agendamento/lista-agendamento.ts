import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Alert, Loading } from 'ionic-angular';
import { Agendamento } from '../../app/models/agendamento';
import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento-dao';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';

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
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private agendamentoService: AgendamentosServiceProvider,
    private agendamentoDao: AgendamentoDaoProvider) { }

  ionViewDidLoad() {
    this.agendamentoDao.listaTodos().subscribe(
      (agendamentos: Agendamento[]) => {
        this.agendamentos = agendamentos;
      },
      (error) => { console.log(error); }
    );
  }

  reagendar(agendamento: Agendamento) {
    let loading: Loading = this._loadingCtrl.create({
      content: 'Carregando itens...'
    });

    loading.present();

    let alert: Alert = this._alertCtrl.create({
      buttons: [{text: 'Ok'}]
    });

    let titulo: string = '';
    let mensagem: string = '';
    
    this.agendamentoService.agendar(agendamento)
      .mergeMap((val) => {
        let observable = this.agendamentoDao.salvar(agendamento);

        if(val instanceof Error)
          throw val;

        return observable;
      })
      .finally(() => {
        alert.setTitle(titulo);
        alert.setSubTitle(mensagem);
        alert.present();
      })  
      .subscribe(
        () => {
          loading.dismiss();
          titulo = 'SUCESSO';
          mensagem = 'Agendamento reenviado!';
        }, 
        (error) => {
          console.log(error);
          loading.dismiss();
          titulo = 'ERRO';
          mensagem = error.message;
        });
  }

}
