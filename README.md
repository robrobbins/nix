# Nix
Fast relief from framework fatigue...

*Nix*. As in:

* U*nix*: [the Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
* *nix*: Veto, Reject. This according to [Merriam-Webster](https://www.merriam-webster.com/dictionary/nix)

We are rejecting walled-gardens in favor of smaller, more composeable pieces. For specialized
components that can be combined in different ways to form a desired outcome.

## Not. Another. Framework.
The cure to framework fatigue is not more frameworks. It's less, or more specifically, to
create a way to combine micro-framworks and libraries (or the lack thereof) into a whole
that is more than the sum of its parts.

## A Philosophy
Nix style apps attempt to build specialized systems by combining generic sub components. We do this
by utilizing [typescript]() to enforce contracts between these pieces.

#### 1,2,3,4
From a high level, Nix components in a system can act as one of four things:

1. A *Consumer*: Takes arguments of a specified type as *input*. Returns no *output*. Assumed
   to have side effects.
2. A *Producer*: Takes no arguments, has no *input*. Returns specified type as *output*. May
   or may not have side effects.
3. A *Filter*: Takes arguments of a specified type as *input*. Returns specified type as *output*.
   Filters must be pure, thus cannot modify their input nor have side effects.
4. An *Actor*: Takes arguments of a specified type as *input*. Returns specified type as *output*.
   Actors are impure and make no promises about purity. Side effects are thus allowed.
