import { Component, OnInit } from '@angular/core';
import {Car} from "../car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent implements OnInit {

  car: Car = {
    id: 1,
    name: 'Kitt'
  };

  constructor() { }

  ngOnInit() {
  }

}
