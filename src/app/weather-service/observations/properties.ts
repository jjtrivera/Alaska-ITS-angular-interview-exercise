import { Elevation } from '../elevation';
import { BarometricPressure } from './barometricpressure';
import { Dewpoint } from './dewpoint';
import { HeatIndex } from './heatindex';
import { MaxTemperatureLast24Hours } from './maxtemperaturelast24hours';
import { MinTemperatureLast24Hours } from './mintemperaturelast24hours';
import { PrecipitationLast3Hours } from './precipitationlast3hours';
import { RelativeHumidity } from './relativehumidity';
import { SeaLevelPressure } from './sealevelpressure';
import { Temperature } from './temperature';
import { Visibility } from './visibility';
import { WindChill } from './windchill';
import { WindDirection } from './winddirection';
import { WindGust } from './windgust';
import { WindSpeed } from './windspeed';

export interface Properties {
  '@id': string;
  '@type': string;
  elevation: Elevation;
  station: string;
  timestamp: string;
  rawMessage: string;
  textDescription: string;
  icon: any;
  presentWeather: any[];
  temperature: Temperature;
  dewpoint: Dewpoint;
  windDirection: WindDirection;
  windSpeed: WindSpeed;
  windGust: WindGust;
  barometricPressure: BarometricPressure;
  seaLevelPressure: SeaLevelPressure;
  visibility: Visibility;
  maxTemperatureLast24Hours: MaxTemperatureLast24Hours;
  minTemperatureLast24Hours: MinTemperatureLast24Hours;
  precipitationLast3Hours: PrecipitationLast3Hours;
  relativeHumidity: RelativeHumidity;
  windChill: WindChill;
  heatIndex: HeatIndex;
  cloudLayers: any[];
}
