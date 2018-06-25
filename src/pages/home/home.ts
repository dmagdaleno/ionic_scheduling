import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CarComponent} from '../../app/car/car.component'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cars: CarComponent[];

  constructor(public navCtrl: NavController) {
    this.cars = [
      new CarComponent("Gol", 20000),
      new CarComponent("Brasília", 5000)
    ];
  }

}
