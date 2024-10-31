import { Context } from './context';
import { Feature } from './feature';

export interface Root {
  '@context': [string, Context];
  type: string;
  features: Feature[];
}
