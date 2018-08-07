import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, Alert } from 'ionic-angular';
import { Item } from '../../app/models/item';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';
import { Agendamento } from '../../app/models/agendamento';
import { HttpErrorResponse } from '@angular/common/http';
import { HomePage } from '../home/home';

import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento-dao';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public item: Item;
  public precoTotal: number;

  public nome: string = '';
  public endereco: string = '';
  public email: string = '';
  public data: string = new Date().toISOString();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private agendamentoService: AgendamentosServiceProvider,
    private agendamentoDao: AgendamentoDaoProvider,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _vibration: Vibration) {

      this.item = this.navParams.get('itemSelecionado');
      this.precoTotal = this.navParams.get('precoTotal');
  }

  agendar(){
    if(!this.nome || !this.endereco || !this.email){
      this._vibration.vibrate(300);
      this._alertCtrl.create({
        title: 'Campo obrigatório',
        subTitle: 'Favor preencher todos os campos',
        buttons: [{text: 'Ok'}]
      }).present();
      return;
    }

    let loading:Loading = this._loadingCtrl.create({
      content: 'Carregando itens...'
    });

    loading.present();

    let alert: Alert = this._alertCtrl.create({
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.navCtrl.setRoot(HomePage);
        }
      }]
    });

    let agendamento: Agendamento = {
      modeloCarro: this.item.nome,
      precoTotal: this.precoTotal,
      nomeCliente: this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      data: this.data,
      confirmado: false,
      enviado: false
    }

    let titulo: string = '';
    let mensagem: string = '';

    this.agendamentoDao.jaExiste(agendamento)
      .mergeMap((jaExiste) => {
        if(jaExiste) 
          throw new Error('Agendamento já existe!');

        return this.agendamentoService.agendar(agendamento)
      })
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
      .subscribe(() => {
        loading.dismiss();
        titulo = 'SUCESSO';
        mensagem = 'O agendamento foi realizado com sucesso!';
      }, 
      (error: HttpErrorResponse) => {
        console.log(error);
        loading.dismiss();
        titulo = 'ERRO';
        mensagem = error.message;
      });
  }
}