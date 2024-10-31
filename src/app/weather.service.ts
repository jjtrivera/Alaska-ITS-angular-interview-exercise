import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Root } from './weather-service/root';
import { Root as ObservationRoot } from './weather-service/observations/root';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherURL: string = 'https://api.weather.gov/stations';
  private weatherLimit: string = '?limit=100';

  private weatherObservationsURL: string = 'observations?limit=1';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getStationList(): Observable<Root> {
    return this.httpClient
      .get<Root>(`${this.weatherURL}${this.weatherLimit}`)
      .pipe(catchError(this.handleError<Root>('getStationList', null)));
  }

  getObservationsForStationID(StationID: string): Observable<ObservationRoot> {
    return this.httpClient
      .get<ObservationRoot>(
        `${this.weatherURL}/${StationID}/${this.weatherObservationsURL}`
      )
      .pipe(
        catchError(
          this.handleError<ObservationRoot>('getObservationsForStationID', null)
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
