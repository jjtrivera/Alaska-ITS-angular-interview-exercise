import { Bearing } from './bearing';
import { County } from './county';
import { Distance } from './distance';
import { ForecastGridData } from './forecastgriddata';
import { ForecastOffice } from './forecastoffice';
import { Geometry } from './geometry';
import { PublicZone } from './publiczone';
import { UnitCode } from './unitcode';
import { Value } from './value';

export interface Context {
  '@version': string;
  wx: string;
  s: string;
  geo: string;
  unit: string;
  '@vocab': string;
  geometry: Geometry;
  city: string;
  state: string;
  distance: Distance;
  bearing: Bearing;
  value: Value;
  unitCode: UnitCode;
  forecastOffice: ForecastOffice;
  forecastGridData: ForecastGridData;
  publicZone: PublicZone;
  county: County;
}
