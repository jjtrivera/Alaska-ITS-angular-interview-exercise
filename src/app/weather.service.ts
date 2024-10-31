import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Root } from './weather-service/root';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherURL: string = 'https://api.weather.gov/stations';
  private resultsLimit: string = '?limit=100';

  constructor() {}
}
