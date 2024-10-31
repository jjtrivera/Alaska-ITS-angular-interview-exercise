import { Geometry2 } from '../geometry2';
import { Properties } from '../properties';

export interface Feature {
  id: string;
  type: string;
  geometry: Geometry2;
  properties: Properties;
}
