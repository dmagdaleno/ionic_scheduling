import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../app/models/item';
import { CadastroPage } from '../cadastro/cadastro';

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {
  public item: Item;
  public subitens: Item[];
  private total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('itemSelecionado');
    this.total = this.item.preco;
    this.subitens = [
      {nome: 'Direção hidráulica', preco: 1000},
      {nome: 'Teto solar', preco: 800},
      {nome: 'Porta copos', preco: 10},
      {nome: 'Trio elétrico', preco: 300}
    ];
  }

  atualizaTotal(ativo: boolean, subitem: Item){
    this.total += ativo ? subitem.preco : subitem.preco*(-1)
  }

  get precoTotal():number {
    return this.total;
  }

  avancar(){
    this.navCtrl.push(CadastroPage.name, {
      itemSelecionado: this.item,
      precoTotal: this.total
    })
  }

}
