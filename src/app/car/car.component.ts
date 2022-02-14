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
  carName = '';

  constructor() {
    setTimeout(() => {
      this.allowAddNewCar = true;
    }, 7000);
  }

  ngOnInit(): void {
  }

  onDisplayCreatedCar() {
    this.carCreationStatus = "You created a car";
  }

  onUpdateCarName(event: Event) {
    this.carName = (<HTMLInputElement>event.target).value;

  }
}
