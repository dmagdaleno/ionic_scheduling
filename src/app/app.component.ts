import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListaAgendamentoPage } from '../pages/lista-agendamento/lista-agendamento';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { Usuario } from './models/usuario';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;

  rootPage:any = LoginPage;

  public paginas = [
    {titulo: 'Agendamentos', componente: ListaAgendamentoPage.name, icone: 'calendar'},
    {titulo: 'Perfil', componente: PerfilPage.name, icone: 'person'}
  ];

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private usuarioService: UsuarioServiceProvider) {
      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
  }

  irPara(pagina){
    this.nav.push(pagina);
  }

  get avatar(): string {
    return this.usuarioService.obtemAvatar();
  }

  get usuarioLogado(): Usuario {
    return this.usuarioService.obtemUsuarioLogado();
  }
}

