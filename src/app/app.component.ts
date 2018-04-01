import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cities: SelectItem[];
  selectedCity: string;

  @ViewChild('myB') myB;

  constructor() {
    this.cities = [];
    this.cities.push({ label: 'New York', value: 1 });
    this.cities.push({ label: 'Rome', value: 2 });
    this.cities.push({ label: 'London', value: 3 });
    this.cities.push({ label: 'Istanbul', value: 4 });
    this.cities.push({ label: 'Paris', value: 5 });
  }



  handleClick() {
    console.log('clicked');
    console.log(this.selectedCity);
  }

  dropdownSelectionChanged() {
    console.log('dropdownSelectionChanged');

  }
}
