import { Context } from './context';
import { Feature } from './feature';
import { Pagination } from './pagination';

export interface Root {
  '@context': [string, Context];
  type: string;
  features: Feature[];
  observationStations: string[];
  pagination: Pagination;
}
