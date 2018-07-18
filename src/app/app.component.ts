import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ListaAgendamentoPage } from '../pages/lista-agendamento/lista-agendamento';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ListaAgendamentoPage.name;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

