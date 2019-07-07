import { Component, OnInit } from '@angular/core';
import {Car} from "../car";
import {CarsService} from "./cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars  = this.carsService.getCars();
  }

}
