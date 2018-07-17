import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = 'joao@alura.com.br';
  senha: string = 'alura123';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private usuarioService: UsuarioServiceProvider) {
  }

  login(){
    this.usuarioService.login(this.email, this.senha)
      .subscribe(() => {
        this.navCtrl.setRoot(HomePage);
      },
      () => {
        this.alertCtrl.create({
          title: 'Falha no login', 
          subTitle: 'Email ou senha incorretos!',
          buttons: [{text: 'Ok'}]
        }).present();
      }
    );
  }

}
