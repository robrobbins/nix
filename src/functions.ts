/*
 * Consumer:
 *
 * A function, taking args of a specified type, that does not return a value.
 * Cosumers are assumed to have side effects.
 *
 */
export interface Consumer<T, U = T, V = U> {
  (t: T, u?: U, v?: V): void;
}

/*
 * Actor:
 *
 * An Actor is a Consumer that returns a value(s). Unlike Filters, Actors are impure functions.
 * It is a safe assumption that an Actor has side effects.
 *
 * Note that an Actor (and later, a Filter) defines its return type via its accepted types,
 * specifically, the last type accepted:
 *
 *   Actor<foo> Unary type. Unarry function arity. Both input and output of <foo>:
 *     `a => a`
 *   Actor<foo, bar> Binary type. Fuction may be unary or binary in arity, output of <bar>:
 *     `(a, b?) => b`
 *   Actor<foo, bar, baz> Ternary type. Function may be binary ar ternary in arity, output of <baz>:
 *     `(a, b, c?) => c`
 *
 * See tests for examples.
 *
 */
export interface Actor<T, U = T, V = U> {
  (t: T, u?: U, v?: V): V;
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
 * A pure function taking the specified type(s) as args and returning a specified type.
 *
 * The behavior of the provided types in regard to input and output is the same as Actor.
 *
 * See Actor above
 * See tests for examples
 *
 */
export interface Filter<T, U = T, V = U> {
  (t: T, u?: U, v?: V): V;
}
