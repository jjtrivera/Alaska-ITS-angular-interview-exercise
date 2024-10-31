import { Elevation } from './elevation';

export interface Properties {
  '@id': string;
  '@type': string;
  elevation: Elevation;
  stationIdentifier: string;
  name: string;
  timeZone: string;
  forecast: string;
  county: string;
  fireWeatherZone: string;
}
