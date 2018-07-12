import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    console.log('email: ' + this.email);
    console.log('senha: ' + this.senha);
    this.navCtrl.setRoot(HomePage);
  }

}
