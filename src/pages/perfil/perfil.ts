import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { Usuario } from '../../app/models/usuario';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private usuarioService: UsuarioServiceProvider,
    private camera: Camera) {
  }
  
  get avatar(): string {
    return this.usuarioService.obtemAvatar();
  }

  get usuarioLogado(): Usuario {
    return this.usuarioService.obtemUsuarioLogado();
  }
  
  tiraFoto(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true
    })
    .then(uri => {
      uri = normalizeURL(uri);
      this.usuarioService.salvaAvatar(uri);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
