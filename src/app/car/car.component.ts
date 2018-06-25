import { Component, Input } from '@angular/core';

@Component({
  selector: 'car',
  templateUrl: './car/car.component.html'
})
export class CarComponent {
    @Input() name: string;
    @Input() price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
}