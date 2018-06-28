import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../app/models/item';

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {
  public item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('itemSelecionado');
    console.log(this.item);
  }

  ionViewDidLoad() {
  }

}
