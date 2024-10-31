import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Root } from './weather-service/root';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  stations: Root;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getStationList();
  }

  getStationList() {
    this.weatherService
      .getStationList()
      .subscribe((sl) => (this.stations = sl));
  }
}
