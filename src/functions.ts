/*
 * Consumer:
 *
 * A function, taking args of a specified type, that does not return a value.
 * Cosumers are assumed to have side effects.
 *
 */
export interface Consumer<T> {
  (...args: T[]): void;
}

/*
 * Actor:
 *
 * An Actor is a Consumer that returns a value(s). Unlike Filters, Actors are impure functions.
 * It is a safe assumption that an Actor has side effects.
 *
 * Note that an Actor (and later, a Filter) defines its return type via a 2nd arg:
 *
 *   Foo:Actor<input, output>...
 *
 * You can, however, omit the 2nd arg and the return type will be assumed to be the same as the first:
 *
 *   Foo:Actor<input>
 *
 * See tests for examples.
 *
 */
export interface Actor<T, U = T> {
  (...args: T[]): U;
}

/*
 * Producer:
 *
 * A function, taking no args, that returns some value of the specified type when called.
 * Producers may, or may not, have side effects.
 */
export interface Producer<T> {
  (): T;
}

/*
 * Filter:
 *
 * A pure function taking the specified type(s) as args and returning a specified type. As with the Actor,
 * you may omit the 2nd type arg if it is the same as the first.
 *
 * See tests for more.
 *
 */
export interface Filter<T, U = T> {
  (...args: T[]): U;
}

