import * as f from '../interfaces/functions'

export abstract class UConsumer<T> {
  abstract in: f.UConsumer<T>;
}

export abstract class BConsumer<T, U> {
  abstract in: f.BConsumer<T, U>;
}

export abstract class TConsumer<T, U, V> {
  abstract in: f.TConsumer<T, U, V>;
}

export abstract class VConsumer {
  abstract in: f.VConsumer;
}

export abstract class TVConsumer<T> {
  abstract in: f.TVConsumer<T>;
}

export abstract class Actor<T> {
  abstract in: f.UConsumer<T>;
  abstract out: f.UProducer<T>;
}

export abstract class BActor<T, U> {
  abstract in: f.BConsumer<T, U>;
  abstract out: f.BProducer<T, U>;
}

export abstract class TActor<T, U, V> {
  abstract in: f.TConsumer<T, U, V>;
  abstract out: f.TProducer<T, U, V>;
}

export abstract class VActor {
  abstract in: f.VConsumer;
  abstract out: f.VProducer;
}

export abstract class UProducer<T> {
  abstract out: f.UProducer<T>;
}

export abstract class BProducer<T, U> {
  abstract out: f.BProducer<T, U>;
}

export abstract class TProducer<T, U, V> {
  abstract out: f.TProducer<T, U, V>;
}

export abstract class VProducer {
  abstract out: f.VProducer;
}
