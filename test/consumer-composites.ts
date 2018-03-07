import { Consumer } from '../src/composites'

describe('Consumer objects', () => {
  // some sort of defined payload for the external
  interface Stuff {
    count: number;
    words: string[];
  }

  // something to interact with.
  const external = {
    foo: function(data: Stuff): void {}
  }

  it('can be an object literal', () => {
    const chopper:Consumer<string> = {
      timesCalled: 0,
      in: function(str) {
        external.foo({
          count: ++this.timesCalled,
          words: str.split(' ')
        })
      },
    }

    const spy = spyOn(external, 'foo')

    chopper.in('Hello World!')

    // consumer will have side effects
    expect(chopper.timesCalled).toBe(1)
    expect(spy.calls.mostRecent().args[0]).toEqual({ count: 1, words: ['Hello', 'World!'] })

    chopper.in('aoeu htn s')
    expect(chopper.timesCalled).toBe(2)
    expect(spy.calls.mostRecent().args[0]).toEqual({ count: 2, words: ['aoeu', 'htn', 's'] })

    // TS should throw
    // chopper.in(5)
    // chopper.in('foo', 'bar')
  })

})
