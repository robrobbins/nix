import Consumer from '../src/interfaces/consumer'
import Producer from '../src/interfaces/producer'
import Filter from '../src/interfaces/filter'

/*
 * These 3 are the high level concepts that govern the pieces involved in any nix system. Any
 * component may be described as one of:
 *
 * * Consumer: Consumes some value(s) via its `in` method. That value(s) consumed must be
 *   described via typed function signatures, or an `input` interface.
 *   With that in place, any producer can be determined to be compatible
 *   (with some consumer) based on the shape of its output.
 * * Producer: Produces some value(s) via its `out` method. An `output` interface, or
 *   typed function return, is mandatory as it will be used by prospective consumers to judge compatability.
 * * Filter: Consumes some input, produces some output. Both input and output must be
 *   explicitly stated (see Consumer, Producer) as compatibility need be ascertained.
 */

// an output of a primitive type can just describe the function itself:
class SimpleGen implements Producer {
  private number: number

  constructor() {
    this.number = 0
  }

  out(): number {
    return ++this.number
  }

  report(): string {
    return `current number is ${this.number}`
  }
}

// consumption of a primitive can be defined simply by the method
class SimpleConsumer implements Consumer {
  private list: number[]

  constructor() {
    this.list = []
  }

  in(n: number): void {
    this.list.push(n)
  }

  report(): string {
    return `list length is ${this.list.length}`
  }
}

describe('Simple Consumers, Producers and Filters', () => {
  it('Produces', () => {
    const p = new SimpleGen
    expect(p.out()).toBe(1)
  })

  it('Consumes', () => {
    const p = new SimpleGen
    const c = new SimpleConsumer
    c.in(p.out())
    expect(c.report()).toBe('list length is 1')
  })
})
