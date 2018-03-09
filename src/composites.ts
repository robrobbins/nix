import * as f from './functions'

export interface Consumer<T, U = T, V = U> {
  in: f.Consumer<T, U, V>;
  [propName: string]: any;
}

export interface Producer<T> {
  out: f.Producer<T>;
  [propName: string]: any;
}

export interface Actor<T, U = T, V = U> {
  in: f.Consumer<T, U, V>;
  out: f.Producer<V>;
  [propName: string]: any;
}
