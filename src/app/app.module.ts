import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ItemServiceProvider } from '../providers/item-service/item-service';
import { AgendamentosServiceProvider } from '../providers/agendamentos-service/agendamentos-service';

import { IonicStorageModule } from '@ionic/storage'

import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/finally'
import 'rxjs/add/operator/mergeMap'
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';
import { ApiProvider } from '../providers/api/api';

import { Vibration } from '@ionic-native/vibration';
import { DatePicker } from '@ionic-native/date-picker';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'shedulingdb',
      storeName: 'agendamentos',
      driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemServiceProvider,
    AgendamentosServiceProvider,
    AgendamentoDaoProvider,
    UsuarioServiceProvider,
    ApiProvider,
    Vibration,
    DatePicker,
    Camera
  ]
})
export class AppModule {}
