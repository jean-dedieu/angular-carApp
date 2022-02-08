import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carPrice = 330000;
  carBrand = "Toyota Hyundai Hybrid";
  allowAddNewCar = false;
  carCreationStatus = "No car yet created";

  constructor() {
    setTimeout(() => {
      this.allowAddNewCar = true;
    }, 7000);
  }

  ngOnInit(): void {
  }

  displayCreatedCar() {
    this.carCreationStatus = "You created a car";
  }
}
