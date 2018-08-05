import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { Usuario } from '../../app/models/usuario';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private usuarioService: UsuarioServiceProvider) {
  }

  get usuarioLogado(): Usuario {
    return this.usuarioService.obtemUsuarioLogado();
  }

}
