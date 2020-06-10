import { Tutorial } from './Models/Tutorial ';
import { Products } from './Models/Products';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly products:Products[];
}