import * as f from './functions'

export interface Consumer<T> {
  in: f.Consumer<T>;
  [propName: string]: any;
}

export interface Producer<T> {
  out: f.Producer<T>;
  [propName: string]: any;
}

export interface Actor<T, U> {
  in: f.Consumer<T>;
  out: f.Producer<U>;
  [propName: string]: any;
}
