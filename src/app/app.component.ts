import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1: string = 'Angular-In-Examples';
  title2: string = 'Unit Tests';

  counter: number = 0;
  userName: string;

  increment() {
    this.counter++;
  }

  constructor(private myService: CustomerService) {
    this.userName = myService.customerName
  }
}
