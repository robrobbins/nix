import * as f from './functions'

export interface UConsumer<T> {
  in: f.UConsumer<T>;
  [propName: string]: any;
}

export interface UProducer<T> {
  out: f.UProducer<T>;
  [propName: string]: any;
}

export interface UActor<T> {
  in: f.UConsumer<T>;
  out: f.UProducer<T>;
  [propName: string]: any;
}
