/*
 * Consumer:
 *
 * A function, taking args of a specified type, that does not return a value.
 * Cosumers are assumed to have side effects.
 *
 * Unary, Binary and Ternary consumers are denoted by their capitalized U, B and T prefixes.
 * Note that the arity is also used to enforce type.
 *
 * A variadic consumer is provided, "V", which has no restriction on number of args or
 * expected types.
 *
 * A "Typed Variadic" variant is also present, "TV",  this is used when a variable number of args
 * is needed, but all will be of the same type
 */

export interface UConsumer<T> {
  (t: T): void;
}

export interface BConsumer<T, U> {
  (t: T, u: U): void;
}

export interface TConsumer<T, U, V> {
  (t: T, u: U, v: V): void;
}

export interface VConsumer {
  (...args: any[]): void;
}

export interface TVConsumer<T> {
  (...args: T[]): void;
}

/*
 * Actor:
 *
 * An Actor is a Consumer that returns a value(s). Unlike Filters, Actors are impure functions.
 * It is a safe assumption that an Actor has side effects.
 *
 * Our same Unary, Binary, Ternary and Variadic variants are available (see "Consumer" above).
 * Note that for Actors (and the same later for Filters) the return type must be (one of) the input type(s)
 * in all cases except variadic.
 *
 * Note that an Actor's (and later, Filters) "arity" is defined by the number of args defined by the type:
 *
 *   Foo:BActor<type1, type2>...
 *
 * This may, or may not equate to the arguments passed to the function itself. A Binary Actor (or Filter) may either:
 * * Take 2 argments to its function, returning one of those types
 * * Take 1 argument to its function, returning a different type
 *
 * This means that, technically, the 2nd argument in a BActor's (or Filter's) inner function is optional and must be
 * treated as such. If you are using it you will need to provide either a default argument value, or guard it in the function body:
 *
 * See specs for examples.
 */
export interface UActor<T> {
  (t: T): T;
}

export interface BActor<T, U> {
  (t: T, u?: U): T | U;
}

export interface TActor<T, U, V> {
  (t: T, u: U, v?: V): T | U | V;
}

export interface VActor {
  (...args: any[]): any;
}

export interface TVActor<T> {
  (...args: T[]): T;
}

/*
 * Producer:
 *
 * A function, taking no args, that returns some value of the specified type when called.
 * Producers may, or may not, have side effects.
 */
export interface UProducer<T> {
  (): T;
}

export interface BProducer<T, U> {
  (): T | U;
}

export interface TProducer<T, U, V> {
  (): T | U | V;
}

export interface VProducer {
  (): any;
}

/*
 * Filter:
 *
 * A pure function taking the specified type and number of argument(s) and returning another.
 * The same rules apply for the return type of U,B,T and TV Filters as Actors, that is, the retrned type
 * must be (one of) the type(s) accepted as input.
 */
export interface UFilter<T> {
  (t: T): T;
}

export interface BFilter<T, U> {
  (t: T, u?: U): T | U;
}

export interface TFilter<T, U, V> {
  (t: T, u: U, v?: V): T | U | V;
}

export interface VFilter {
  (...args: any[]): any;
}

export interface TVFilter<T> {
  (...args: T[]): T;
}

