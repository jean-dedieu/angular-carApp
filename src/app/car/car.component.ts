import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  styles: [`
    .online {
      color: white;/*when car status is on we add colors text in white*/
    }
  `]
})
export class CarComponent implements OnInit {
  carId : number = 10;
  carStatus : string = 'off';
  carPrice = 330000;
  allowAddNewCar = false;
  carCreationStatus = "No car yet created";
  carName = '';
  carCreated = false;//see down when car created we turn it to true, ngIf concept in html
  cars = ['car1','car2'];



  constructor() {
    //time out to active button
    setTimeout(() => {
      this.allowAddNewCar = true;
    }, 7000);

    //initialize car status attibute
    this.carStatus = Math.random() > 0.5 ? 'on' : 'off';

  }

  ngOnInit(): void {
  }
  //getter
  getCarStatus() {
    return this.carStatus
  }
  onDisplayCreatedCar() {
    this.carCreated = true;//we turn it to true when add car the button is clicked
    this.cars.push(this.carName);//we push a car in our cars declared array
    this.carCreationStatus = "You created the car " + this.carName;
  }

  onUpdateCarName(event: Event) {
    this.carName = (<HTMLInputElement>event.target).value;

  }
  getColor() {
    return this.carStatus == 'on' ? 'green' : 'red';
  }
}
