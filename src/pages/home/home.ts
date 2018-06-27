import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Item } from '../../app/models/item'
import { ItemServiceProvider } from '../../providers/item-service/item-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {
  public itens: Item[];
  
  constructor(
    public navCtrl: NavController, 
    private itemService: ItemServiceProvider,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) { }

  ionViewDidLoad(){
    let loading:Loading = this._loadingCtrl.create({
      content: 'Carregando itens...'
    });

    loading.present();

    this.itemService.lista()
      .subscribe((itens) => {
        this.itens = itens;
        loading.dismiss();
      },(erro: HttpErrorResponse) => {
        console.log(erro);
        loading.dismiss();
        
        this._alertCtrl.create({
          title: 'Falha na conexão',
          subTitle: 'Não foi possível carregar a lista de itens',
          buttons: [{text: 'Ok'}]
        }).present();

      });
  }

}
