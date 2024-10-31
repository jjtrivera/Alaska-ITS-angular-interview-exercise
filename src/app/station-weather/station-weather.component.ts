import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Root } from '../weather-service/observations/root';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-station-weather',
  standalone: true,
  imports: [],
  templateUrl: './station-weather.component.html',
  styleUrl: './station-weather.component.scss',
})
export class StationWeatherComponent implements OnInit {
  stationObservation: Root;
  stationName: string;
  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getObservations();
  }

  getObservations(): void {
    this.stationName = this.router.snapshot.paramMap.get('name');
    console.log(this.stationName);
    const stationId: string = this.router.snapshot.paramMap.get('id');
    this.weatherService
      .getObservationsForStationID(stationId)
      .subscribe((so) => (this.stationObservation = so));
  }
}
